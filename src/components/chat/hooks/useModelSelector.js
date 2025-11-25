import { useState, useEffect, useRef } from 'react';

/**
 * Available AI models configuration
 */
export const AVAILABLE_MODELS = [
  { id: 'gpt-5', name: 'GPT-5', provider: 'OpenAI' },
  { id: 'claude-opus-4-5', name: 'Claude Opus 4.5', provider: 'Anthropic' },
  { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5', provider: 'Anthropic' },
  { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5', provider: 'Anthropic' },
  { id: 'kimi-k2', name: 'Kimi K2', provider: 'Moonshot' },
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'Google' },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google' },
];

/**
 * Custom hook for managing model selection
 */
export function useModelSelector() {
  const [selectedModel, setSelectedModel] = useState(() => {
    return localStorage.getItem('ragy-selected-model') || 'gpt-5';
  });
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const modelSelectorRef = useRef(null);

  // Save selected model to localStorage
  useEffect(() => {
    localStorage.setItem('ragy-selected-model', selectedModel);
  }, [selectedModel]);

  // Close model selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelSelectorRef.current && !modelSelectorRef.current.contains(event.target)) {
        setIsModelSelectorOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentModel = AVAILABLE_MODELS.find(m => m.id === selectedModel);

  const selectModel = (modelId) => {
    setSelectedModel(modelId);
    setIsModelSelectorOpen(false);
  };

  return {
    selectedModel,
    currentModel,
    isModelSelectorOpen,
    setIsModelSelectorOpen,
    modelSelectorRef,
    selectModel,
    availableModels: AVAILABLE_MODELS,
  };
}

