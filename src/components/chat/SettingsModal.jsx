import { useState, useEffect } from 'react';
import { X, Save, Eye, EyeOff } from 'lucide-react';
import './SettingsModal.css';

const SettingsModal = ({ onClose }) => {
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    anthropic: '',
    moonshot: '',
    gemini: '',
  });
  const [showKeys, setShowKeys] = useState({
    openai: false,
    anthropic: false,
    moonshot: false,
    gemini: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  useEffect(() => {
    loadApiKeys();
  }, []);

  const loadApiKeys = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/settings/api-keys');
      if (response.ok) {
        const keys = await response.json();
        setApiKeys(keys);
      }
    } catch (error) {
      console.error('Failed to load API keys:', error);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/settings/api-keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiKeys),
      });

      if (response.ok) {
        setSaveStatus('success');
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      console.error('Failed to save API keys:', error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const toggleShowKey = (provider) => {
    setShowKeys(prev => ({
      ...prev,
      [provider]: !prev[provider],
    }));
  };

  return (
    <div className="settings-modal-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="settings-modal-content">
          <div className="settings-section">
            <h3>API Keys</h3>
            <p className="settings-description">
              Your API keys are stored securely and encrypted. They will persist across app restarts.
            </p>

            <div className="api-key-inputs">
              <div className="api-key-field">
                <label htmlFor="openai-key">OpenAI API Key</label>
                <div className="api-key-input-wrapper">
                  <input
                    id="openai-key"
                    type={showKeys.openai ? 'text' : 'password'}
                    value={apiKeys.openai}
                    onChange={(e) => setApiKeys({ ...apiKeys, openai: e.target.value })}
                    placeholder="sk-..."
                  />
                  <button
                    className="toggle-visibility-btn"
                    onClick={() => toggleShowKey('openai')}
                    type="button"
                  >
                    {showKeys.openai ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <span className="api-key-hint">Used for GPT-4 and GPT-3.5 models</span>
              </div>

              <div className="api-key-field">
                <label htmlFor="anthropic-key">Anthropic API Key</label>
                <div className="api-key-input-wrapper">
                  <input
                    id="anthropic-key"
                    type={showKeys.anthropic ? 'text' : 'password'}
                    value={apiKeys.anthropic}
                    onChange={(e) => setApiKeys({ ...apiKeys, anthropic: e.target.value })}
                    placeholder="sk-ant-..."
                  />
                  <button
                    className="toggle-visibility-btn"
                    onClick={() => toggleShowKey('anthropic')}
                    type="button"
                  >
                    {showKeys.anthropic ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <span className="api-key-hint">Used for Claude models (Opus, Sonnet, Haiku)</span>
              </div>

              <div className="api-key-field">
                <label htmlFor="moonshot-key">Moonshot API Key</label>
                <div className="api-key-input-wrapper">
                  <input
                    id="moonshot-key"
                    type={showKeys.moonshot ? 'text' : 'password'}
                    value={apiKeys.moonshot}
                    onChange={(e) => setApiKeys({ ...apiKeys, moonshot: e.target.value })}
                    placeholder="sk-..."
                  />
                  <button
                    className="toggle-visibility-btn"
                    onClick={() => toggleShowKey('moonshot')}
                    type="button"
                  >
                    {showKeys.moonshot ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <span className="api-key-hint">Used for Kimi K2 model</span>
              </div>

              <div className="api-key-field">
                <label htmlFor="gemini-key">Google Gemini API Key</label>
                <div className="api-key-input-wrapper">
                  <input
                    id="gemini-key"
                    type={showKeys.gemini ? 'text' : 'password'}
                    value={apiKeys.gemini}
                    onChange={(e) => setApiKeys({ ...apiKeys, gemini: e.target.value })}
                    placeholder="AIza..."
                  />
                  <button
                    className="toggle-visibility-btn"
                    onClick={() => toggleShowKey('gemini')}
                    type="button"
                  >
                    {showKeys.gemini ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <span className="api-key-hint">Used for Gemini 2.5 Flash and Gemini 2.5 Pro models</span>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-modal-footer">
          {saveStatus === 'success' && (
            <span className="save-status success">API keys saved successfully!</span>
          )}
          {saveStatus === 'error' && (
            <span className="save-status error">Failed to save API keys. Please try again.</span>
          )}

          <button
            className="save-settings-btn"
            onClick={handleSave}
            disabled={isSaving}
          >
            <Save size={16} />
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
