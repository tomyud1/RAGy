import React from 'react';
import { useChunkingState } from './hooks/useChunkingState';
import { useChunkingJob } from './hooks/useChunkingJob';
import { useChunkingPersistence } from './hooks/useChunkingPersistence';
import { StatusBanner } from './components/StatusBanner';
import { ConversionOutputConfig } from './components/ConversionOutputConfig';
import { MethodSelector } from './components/MethodSelector';
import { ProcessingSummary } from './components/ProcessingSummary';
import { UploadChunked } from './components/UploadChunked';
import { ResumeOption } from './components/ResumeOption';
import { ProgressDisplay } from './components/ProgressDisplay';
import { ActionButtons } from './components/ActionButtons';
import './styles/animations.css';

function ChunkingMethodStep({ project, files, onComplete, onBack, onProjectDataUpdate }) {
  const state = useChunkingState();

  const { handleStartChunking, handleStopChunking, handleUploadChunkedFile, handleChunkAgain, checkResumable } = useChunkingJob({
    project,
    files,
    state,
    onProjectDataUpdate
  });

  useChunkingPersistence({
    project,
    chunking: state.chunking,
    progress: state.progress,
    conversionStartTime: state.conversionStartTime,
    setProgress: state.setProgress
  });

  const handleRetry = () => {
    state.setJobStatus(null);
    state.setExistingJob(null);
    state.setProgress(null);
  };

  const handleStartFresh = () => {
    if (window.confirm('Start fresh? This will discard previous progress.')) {
      state.setShowResumeOption(false);
      state.setResumableProgress(null);
    }
  };

  return (
    <div>
      {/* Status Banner */}
      <StatusBanner
        jobStatus={state.jobStatus}
        existingJob={state.existingJob}
        onRetry={handleRetry}
      />

      {/* Conversion Output Config */}
      <ConversionOutputConfig
        conversionOutputFolder={state.conversionOutputFolder}
        setConversionOutputFolder={state.setConversionOutputFolder}
      />

      {/* Method Selector */}
      <MethodSelector state={state} />

      {/* Processing Summary */}
      <ProcessingSummary
        processingSummary={state.processingSummary}
        chunking={state.chunking}
      />

      {/* Upload Chunked */}
      <UploadChunked
        uploadingChunked={state.uploadingChunked}
        onUploadChunkedFile={(e) => handleUploadChunkedFile(e, onComplete)}
      />

      {/* Resume Option */}
      <ResumeOption
        showResumeOption={state.showResumeOption}
        chunking={state.chunking}
        resumableProgress={state.resumableProgress}
        onResume={() => handleStartChunking(true)}
        onStartFresh={handleStartFresh}
      />

      {/* Progress Display */}
      <ProgressDisplay
        chunking={state.chunking}
        progress={state.progress}
        filesInfo={state.filesInfo}
        conversionStartTime={state.conversionStartTime}
      />

      {/* Action Buttons */}
      <ActionButtons
        onBack={onBack}
        chunking={state.chunking}
        stopping={state.stopping}
        onStop={handleStopChunking}
        jobStatus={state.jobStatus}
        processingSummary={state.processingSummary}
        onComplete={onComplete}
        onStartChunking={handleStartChunking}
        onChunkAgain={handleChunkAgain}
        existingJob={state.existingJob}
        selectedMethod={state.selectedMethod}
        project={project}
      />
    </div>
  );
}

export default ChunkingMethodStep;
