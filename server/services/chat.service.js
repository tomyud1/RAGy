import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../../data/projects');

class ChatService {
  getChatThreadsPath(projectId) {
    return path.join(DATA_DIR, projectId, 'chat-threads.json');
  }

  getChatHistoryPath(threadId) {
    return path.join(DATA_DIR, 'chat-histories', `${threadId}.json`);
  }

  ensureChatHistoriesDir() {
    const dir = path.join(DATA_DIR, 'chat-histories');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  async loadChatThreads(projectId) {
    try {
      const threadsPath = this.getChatThreadsPath(projectId);

      if (!fs.existsSync(threadsPath)) {
        return [];
      }

      const data = fs.readFileSync(threadsPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to load chat threads:', error);
      return [];
    }
  }

  async saveChatThreads(projectId, threads) {
    try {
      const threadsPath = this.getChatThreadsPath(projectId);
      fs.writeFileSync(threadsPath, JSON.stringify(threads, null, 2));
      return true;
    } catch (error) {
      console.error('Failed to save chat threads:', error);
      throw error;
    }
  }

  async createChatThread(projectId, name) {
    try {
      const threads = await this.loadChatThreads(projectId);

      const newThread = {
        id: uuidv4(),
        projectId,
        name: name || `Chat ${threads.length + 1}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        messageCount: 0,
      };

      threads.push(newThread);
      await this.saveChatThreads(projectId, threads);

      // Create empty history file
      this.ensureChatHistoriesDir();
      const historyPath = this.getChatHistoryPath(newThread.id);
      fs.writeFileSync(historyPath, JSON.stringify({ messages: [] }, null, 2));

      return newThread;
    } catch (error) {
      console.error('Failed to create chat thread:', error);
      throw error;
    }
  }

  async deleteChatThread(projectId, threadId) {
    try {
      const threads = await this.loadChatThreads(projectId);
      const updatedThreads = threads.filter(t => t.id !== threadId);
      await this.saveChatThreads(projectId, updatedThreads);

      // Delete history file
      const historyPath = this.getChatHistoryPath(threadId);
      if (fs.existsSync(historyPath)) {
        fs.unlinkSync(historyPath);
      }

      return true;
    } catch (error) {
      console.error('Failed to delete chat thread:', error);
      throw error;
    }
  }

  async loadChatHistory(threadId) {
    try {
      this.ensureChatHistoriesDir();
      const historyPath = this.getChatHistoryPath(threadId);

      if (!fs.existsSync(historyPath)) {
        return { messages: [] };
      }

      const data = fs.readFileSync(historyPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to load chat history:', error);
      return { messages: [] };
    }
  }

  async saveChatHistory(threadId, messages) {
    try {
      this.ensureChatHistoriesDir();
      const historyPath = this.getChatHistoryPath(threadId);
      fs.writeFileSync(historyPath, JSON.stringify({ messages }, null, 2));
      return true;
    } catch (error) {
      console.error('Failed to save chat history:', error);
      throw error;
    }
  }

  async addMessage(threadId, message) {
    try {
      const history = await this.loadChatHistory(threadId);
      history.messages.push(message);
      await this.saveChatHistory(threadId, history.messages);
      return true;
    } catch (error) {
      console.error('Failed to add message:', error);
      throw error;
    }
  }

  async updateThreadMessageCount(projectId, threadId) {
    try {
      const threads = await this.loadChatThreads(projectId);
      const thread = threads.find(t => t.id === threadId);

      if (thread) {
        const history = await this.loadChatHistory(threadId);
        thread.messageCount = history.messages.length;
        thread.updatedAt = new Date().toISOString();
        await this.saveChatThreads(projectId, threads);
      }
    } catch (error) {
      console.error('Failed to update thread message count:', error);
    }
  }
}

export default new ChatService();
