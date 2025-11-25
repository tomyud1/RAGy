/**
 * Job Manager for Embedding Service
 * Handles job tracking, cancellation, and cleanup
 */

/**
 * Active jobs storage
 */
export const activeJobs = new Map();

/**
 * Active Python processes storage
 */
export const activePythonProcesses = new Map();

/**
 * Create a new job
 * @param {string} jobId - Job ID
 * @param {string} projectId - Project ID
 * @returns {Object} Job control object
 */
export function createJob(jobId, projectId) {
  const jobControl = {
    jobId,
    projectId,
    cancelled: false,
    cancel: () => {
      jobControl.cancelled = true;
      console.log(`[Embedding] Job ${jobId} cancelled`);
    }
  };

  activeJobs.set(jobId, jobControl);
  return jobControl;
}

/**
 * Check if a job exists for a project
 * @param {string} projectId - Project ID
 * @returns {Object|null} Existing job or null
 */
export function getExistingJobForProject(projectId) {
  return Array.from(activeJobs.values()).find(j => j.projectId === projectId) || null;
}

/**
 * Cancel a job and kill all associated processes
 * @param {string} jobId - Job ID
 * @returns {boolean} Success
 */
export function cancelJob(jobId) {
  const job = activeJobs.get(jobId);
  if (!job) {
    console.warn(`[Embedding] Job ${jobId} not found`);
    return false;
  }

  console.log(`[Embedding] CANCELLING job ${jobId}`);
  job.cancel();

  // Kill all associated Python processes
  const pythonProcesses = activePythonProcesses.get(jobId);
  if (pythonProcesses && pythonProcesses.size > 0) {
    console.log(`[Embedding] Killing ${pythonProcesses.size} Python process(es)`);

    pythonProcesses.forEach((pythonProcess) => {
      try {
        if (!pythonProcess.killed) {
          pythonProcess.kill('SIGTERM');
        }

        // Force kill after timeout
        setTimeout(() => {
          if (!pythonProcess.killed) {
            try {
              pythonProcess.kill('SIGKILL');
            } catch (e) {}
          }
        }, 500);
      } catch (error) {
        console.error(`[Embedding] Error killing Python process:`, error);
      }
    });

    activePythonProcesses.delete(jobId);
  }

  // Trigger garbage collection if available
  if (global.gc) {
    console.log('[Embedding] Triggering garbage collection');
    global.gc();
  }

  return true;
}

/**
 * Cleanup a job after completion
 * @param {string} jobId - Job ID
 */
export function cleanupJob(jobId) {
  activeJobs.delete(jobId);

  // Ensure all Python processes are killed
  const pythonProcesses = activePythonProcesses.get(jobId);
  if (pythonProcesses && pythonProcesses.size > 0) {
    console.log(`[Embedding] Final cleanup: killing ${pythonProcesses.size} remaining process(es)`);
    pythonProcesses.forEach((proc) => {
      try {
        if (!proc.killed) {
          proc.kill('SIGKILL');
        }
      } catch (e) {}
    });
    activePythonProcesses.delete(jobId);
  }

  if (global.gc) {
    global.gc();
  }
}

