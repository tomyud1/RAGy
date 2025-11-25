/**
 * Welcome message shown when no messages exist
 */
export function ChatWelcome({ selectedVectorDb, vectorDbs }) {
  return (
    <div className="chat-welcome">
      <h2>Welcome to RAGy Chat</h2>
      <p>
        {selectedVectorDb
          ? "Ask questions about your documents and I'll help you find answers using the knowledge base."
          : "Chat with AI directly, or select a vector database to query your documents."}
      </p>
      {!selectedVectorDb && vectorDbs.length > 0 && (
        <p className="info-text">
          Select a vector database from the dropdown above to enable document search.
        </p>
      )}
      {vectorDbs.length === 0 && (
        <p className="info-text">
          To enable document search, create a vector database in the RAG System or load one from disk.
        </p>
      )}
    </div>
  );
}

