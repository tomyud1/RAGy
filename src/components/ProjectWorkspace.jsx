import React, { useState, useEffect } from 'react';
import StepIndicator from './StepIndicator';
import FileUploadStep from './steps/FileUploadStep';
import ChunkingMethodStep from './steps/ChunkingMethodStep';
import ChunkPreviewStep from './steps/ChunkPreviewStep';
import EmbeddingModelStep from './steps/EmbeddingModelStep';
import EmbeddingProgressStep from './steps/EmbeddingProgressStep';
import RAGTestingStep from './steps/RAGTestingStep';

const STEPS = [
  { id: 'upload', title: 'Upload Files', description: 'Upload your documents' },
  { id: 'chunking', title: 'Chunking Method', description: 'Choose how to split documents' },
  { id: 'preview', title: 'Preview Chunks', description: 'Review and test chunks' },
  { id: 'embedding', title: 'Embedding Model', description: 'Select embedding model' },
  { id: 'progress', title: 'Generate Embeddings', description: 'Create vector database' },
  { id: 'testing', title: 'Test RAG System', description: 'Query and compare results' },
];

function ProjectWorkspace({ project, onProjectUpdate }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);
  const [projectData, setProjectData] = useState({
    files: [],
    chunkingMethod: null,
    chunks: null,
    embeddingModel: null,
    vectorDbs: [],
  });
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    loadProjectData();
  }, [project]);

  // Save current step to sessionStorage when it changes
  useEffect(() => {
    if (hasInitialized) {
      sessionStorage.setItem(`ragy_project_${project.id}_step`, currentStep.toString());
      sessionStorage.setItem(`ragy_project_${project.id}_maxStep`, maxStepReached.toString());
    }
  }, [currentStep, maxStepReached, hasInitialized, project.id]);

  const loadProjectData = async () => {
    try {
      const response = await fetch(`/api/projects/${project.id}`);
      const data = await response.json();
      setProjectData(data);

      // Only set initial step on first load, not on subsequent reloads
      // This prevents unwanted redirects when user manually navigates
      if (!hasInitialized) {
        // First, check if we have a saved step in sessionStorage (from a refresh)
        const savedStep = sessionStorage.getItem(`ragy_project_${project.id}_step`);
        const savedMaxStep = sessionStorage.getItem(`ragy_project_${project.id}_maxStep`);

        let initialStep = 0;
        let initialMaxStep = 0;

        if (savedStep !== null && savedMaxStep !== null) {
          // Use saved step from sessionStorage (user refreshed the page)
          initialStep = parseInt(savedStep, 10);
          initialMaxStep = parseInt(savedMaxStep, 10);
        } else {
          // Determine current step based on project state (first time visiting)
          if (data.vectorDbs?.length > 0) {
            initialStep = 5; // Testing step
          } else if (data.chunks) {
            initialStep = 3; // Embedding model selection
          } else if (data.files?.length > 0) {
            initialStep = 1; // Chunking method
          } else {
            initialStep = 0; // Upload files
          }
          initialMaxStep = initialStep;
        }

        setCurrentStep(initialStep);
        setMaxStepReached(initialMaxStep);
        setHasInitialized(true);
      }
    } catch (error) {
      console.error('Failed to load project data:', error);
    }
  };

  const handleStepComplete = (stepData) => {
    setProjectData({ ...projectData, ...stepData });
    if (currentStep < STEPS.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setMaxStepReached(Math.max(maxStepReached, nextStep));
    }
    onProjectUpdate();
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    // Allow navigation to any step up to the highest step reached
    if (stepIndex <= maxStepReached) {
      setCurrentStep(stepIndex);
    }
  };

  const renderStep = () => {
    const stepId = STEPS[currentStep].id;
    
    switch (stepId) {
      case 'upload':
        return (
          <FileUploadStep
            project={project}
            files={projectData.files}
            onComplete={handleStepComplete}
          />
        );
      case 'chunking':
        return (
          <ChunkingMethodStep
            project={project}
            files={projectData.files}
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 'preview':
        return (
          <ChunkPreviewStep
            project={project}
            chunks={projectData.chunks}
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 'embedding':
        return (
          <EmbeddingModelStep
            project={project}
            chunks={projectData.chunks}
            hasExistingVectorDbs={projectData.vectorDbs?.length > 0}
            onComplete={handleStepComplete}
            onBack={handleStepBack}
            onSkipToTesting={() => setCurrentStep(5)}
          />
        );
      case 'progress':
        return (
          <EmbeddingProgressStep
            project={project}
            embeddingModel={projectData.embeddingModel}
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        );
      case 'testing':
        return (
          <RAGTestingStep
            project={project}
            vectorDbs={projectData.vectorDbs}
            onBack={handleStepBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }} className="animate-fade-in">
      <StepIndicator steps={STEPS} currentStep={currentStep} maxStepReached={maxStepReached} onStepClick={handleStepClick} />
      
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: '16px',
        padding: '2rem',
        marginTop: '1rem',
        border: '1px solid var(--border)',
        boxShadow: '0 8px 16px var(--shadow)',
      }}>
        {renderStep()}
      </div>
    </div>
  );
}

export default ProjectWorkspace;

