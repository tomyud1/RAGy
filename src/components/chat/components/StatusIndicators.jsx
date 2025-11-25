import { Settings } from 'lucide-react';

/**
 * Status indicators for vector DB and server
 */
export function StatusIndicators({ vectorDbStatus, serverStatus, onSettingsClick }) {
  return (
    <div className="chat-top-right">
      <div className="status-indicators">
        <div className="vector-db-status">
          <div className={`status-dot ${vectorDbStatus}`} />
          <span className={`status-text ${vectorDbStatus}`}>Vector DB</span>
        </div>

        <div className="server-status">
          <div className={`status-dot ${serverStatus}`} />
          <span className={`status-text ${serverStatus}`}>Server</span>
        </div>
      </div>

      <button
        className="settings-btn"
        onClick={onSettingsClick}
        title="Settings"
      >
        <Settings size={20} />
      </button>
    </div>
  );
}

