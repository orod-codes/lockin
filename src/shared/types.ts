export type ActivityCategory =
  | 'coding'
  | 'browsing'
  | 'learning'
  | 'communication'
  | 'entertainment'
  | 'productivity'
  | 'other';

export interface SystemInfo {
  platform: string;
  arch: string;
  nodeVersion: string;
  chromeVersion: string;
  electronVersion: string;
  appVersion: string;
}

export interface LockInAPI {
  getSystemInfo: () => Promise<SystemInfo>;
  ping: () => Promise<string>;
}

declare global {
  interface Window {
    lockinAPI: LockInAPI;
  }
}
