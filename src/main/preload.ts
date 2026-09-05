import { contextBridge, ipcRenderer } from 'electron';
import type { LockInAPI } from '../shared/types';

const api: LockInAPI = {
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  ping: () => ipcRenderer.invoke('ping'),
};

contextBridge.exposeInMainWorld('lockinAPI', api);
