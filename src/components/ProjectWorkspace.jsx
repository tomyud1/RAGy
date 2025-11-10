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

  const loadProjectData = async () => {
    try {
      const response = await fetch(`/api/projects/${project.id}`);
      const data = await response.json();
      setProjectData(data);
      
      // Only set initial step on first load, not on subsequent reloads
      // This prevents unwanted redirects when user manually navigates
      if (!hasInitialized) {
        // Determine current step based on project state
        if (data.vectorDbs?.length > 0) {
          setCurrentStep(5); // Testing step
        } else if (data.chunks) {
          setCurrentStep(3); // Embedding model selection
        } else if (data.files?.length > 0) {
          setCurrentStep(1); // Chunking method
        } else {
          setCurrentStep(0); // Upload files
        }
        setHasInitialized(true);
      }
    } catch (error) {
      console.error('Failed to load project data:', error);
    }
  };

  const handleStepComplete = (stepData) => {
    setProjectData({ ...projectData, ...stepData });
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    onProjectUpdate();
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    // Allow navigation to any completed step or current step
    if (stepIndex <= currentStep) {
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
      <StepIndicator steps={STEPS} currentStep={currentStep} onStepClick={handleStepClick} />
      
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

