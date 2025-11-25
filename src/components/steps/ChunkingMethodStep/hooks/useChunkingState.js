import { useState } from 'react';
import { DEFAULT_VALUES } from '../constants';

export function useChunkingState() {
  const [selectedMethod, setSelectedMethod] = useState('docling-hybrid');
  const [maxTokens, setMaxTokens] = useState(DEFAULT_VALUES.maxTokens);
  const [batchSize, setBatchSize] = useState(DEFAULT_VALUES.batchSize);
  const [enableFormula, setEnableFormula] = useState(DEFAULT_VALUES.enableFormula);
  const [enablePictureClassification, setEnablePictureClassification] = useState(DEFAULT_VALUES.enablePictureClassification);
  const [enablePictureDescription, setEnablePictureDescription] = useState(DEFAULT_VALUES.enablePictureDescription);
  const [pictureDescriptionMaxTokens, setPictureDescriptionMaxTokens] = useState(DEFAULT_VALUES.pictureDescriptionMaxTokens);
  const [visionModel, setVisionModel] = useState(DEFAULT_VALUES.visionModel);
  const [visionBackend, setVisionBackend] = useState(DEFAULT_VALUES.visionBackend);
  const [conversionOutputFolder, setConversionOutputFolder] = useState(DEFAULT_VALUES.conversionOutputFolder);
  const [enableCodeEnrichment, setEnableCodeEnrichment] = useState(DEFAULT_VALUES.enableCodeEnrichment);
  const [enableOcr, setEnableOcr] = useState(DEFAULT_VALUES.enableOcr);
  const [enableTableStructure, setEnableTableStructure] = useState(DEFAULT_VALUES.enableTableStructure);
  const [visionBatchSize, setVisionBatchSize] = useState(DEFAULT_VALUES.visionBatchSize);
  const [processingBatchSize, setProcessingBatchSize] = useState(DEFAULT_VALUES.processingBatchSize);
  const [chunking, setChunking] = useState(false);
  const [uploadingChunked, setUploadingChunked] = useState(false);
  const [showUploadChunked, setShowUploadChunked] = useState(false);
  const [progress, setProgress] = useState(null);
  const [jobStatus, setJobStatus] = useState(null);
  const [existingJob, setExistingJob] = useState(null);
  const [resumableProgress, setResumableProgress] = useState(null);
  const [showResumeOption, setShowResumeOption] = useState(false);
  const [stopping, setStopping] = useState(false);
  const [conversionStartTime, setConversionStartTime] = useState(null);
  const [conversionSummary, setConversionSummary] = useState(null);
  const [filesInfo, setFilesInfo] = useState([]);
  const [processingSummary, setProcessingSummary] = useState(null);

  return {
    selectedMethod,
    setSelectedMethod,
    maxTokens,
    setMaxTokens,
    batchSize,
    setBatchSize,
    enableFormula,
    setEnableFormula,
    enablePictureClassification,
    setEnablePictureClassification,
    enablePictureDescription,
    setEnablePictureDescription,
    pictureDescriptionMaxTokens,
    setPictureDescriptionMaxTokens,
    visionModel,
    setVisionModel,
    visionBackend,
    setVisionBackend,
    conversionOutputFolder,
    setConversionOutputFolder,
    enableCodeEnrichment,
    setEnableCodeEnrichment,
    enableOcr,
    setEnableOcr,
    enableTableStructure,
    setEnableTableStructure,
    visionBatchSize,
    setVisionBatchSize,
    processingBatchSize,
    setProcessingBatchSize,
    chunking,
    setChunking,
    uploadingChunked,
    setUploadingChunked,
    showUploadChunked,
    setShowUploadChunked,
    progress,
    setProgress,
    jobStatus,
    setJobStatus,
    existingJob,
    setExistingJob,
    resumableProgress,
    setResumableProgress,
    showResumeOption,
    setShowResumeOption,
    stopping,
    setStopping,
    conversionStartTime,
    setConversionStartTime,
    conversionSummary,
    setConversionSummary,
    filesInfo,
    setFilesInfo,
    processingSummary,
    setProcessingSummary,
  };
}
