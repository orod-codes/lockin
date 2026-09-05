import React, { useEffect, useState } from 'react';
import {
  Lock,
  Activity,
  GitBranch,
  Code2,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Cpu,
  RefreshCw,
} from 'lucide-react';
import type { SystemInfo } from '../shared/types';

export const App: React.FC = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [pingStatus, setPingStatus] = useState<string>('Testing...');
  const [isTracking, setIsTracking] = useState<boolean>(true);

  const fetchStatus = async () => {
    try {
      if (window.lockinAPI) {
        const info = await window.lockinAPI.getSystemInfo();
        setSystemInfo(info);
        const pong = await window.lockinAPI.ping();
        setPingStatus(pong === 'pong' ? 'Connected (IPC OK)' : 'Unexpected response');
      } else {
        setPingStatus('Browser Mode (No Electron IPC)');
      }
    } catch (err) {
      setPingStatus('IPC Error');
      console.error('Failed to communicate with Electron main process:', err);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-background text-slate-100 select-none">
      {/* Top Header */}
      <header className="h-14 border-b border-border px-6 flex items-center justify-between bg-surface/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary-600/20 border border-primary-500/40 flex items-center justify-center text-primary-400">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
              LockIn
              <span className="text-[10px] font-mono uppercase bg-primary-500/10 text-primary-400 px-2 py-0.5 rounded border border-primary-500/20">
                v0.1.0-dev
              </span>
            </h1>
          </div>
        </div>

        {/* Live Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {isTracking ? 'Tracking Active' : 'Paused'}
          </div>

          <button
            onClick={() => setIsTracking(!isTracking)}
            className="text-xs px-3 py-1 rounded-md bg-surface hover:bg-surface-hover border border-border transition-colors text-slate-300"
          >
            {isTracking ? 'Pause' : 'Resume'}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Welcome Banner */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-surface via-surface to-primary-950/20 p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Environment Ready 🚀
              </h2>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Phase 1 foundation is running. Electron, Vite HMR, React 18, Tailwind CSS, and
                secure IPC bridges are active and verified.
              </p>
            </div>
            <button
              onClick={fetchStatus}
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border text-slate-400 hover:text-white transition-colors"
              title="Refresh System Info"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          {/* System Info Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
            <div className="bg-background/60 border border-border/70 rounded-lg p-3">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-400" />
                <span>IPC Bridge</span>
              </div>
              <div className="text-xs font-mono font-medium text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3" />
                {pingStatus}
              </div>
            </div>

            <div className="bg-background/60 border border-border/70 rounded-lg p-3">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Cpu className="h-3.5 w-3.5 text-primary-400" />
                <span>OS / Platform</span>
              </div>
              <div className="text-xs font-mono font-medium text-slate-200">
                {systemInfo ? `${systemInfo.platform} (${systemInfo.arch})` : 'Detecting...'}
              </div>
            </div>

            <div className="bg-background/60 border border-border/70 rounded-lg p-3">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Activity className="h-3.5 w-3.5 text-primary-400" />
                <span>Electron</span>
              </div>
              <div className="text-xs font-mono font-medium text-slate-200">
                {systemInfo ? `v${systemInfo.electronVersion}` : '...'}
              </div>
            </div>

            <div className="bg-background/60 border border-border/70 rounded-lg p-3">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Code2 className="h-3.5 w-3.5 text-primary-400" />
                <span>Node.js</span>
              </div>
              <div className="text-xs font-mono font-medium text-slate-200">
                {systemInfo ? `v${systemInfo.nodeVersion}` : '...'}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Previews Section */}
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Upcoming Modules in Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Activity className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Active Window Tracker</h4>
              <p className="text-xs text-slate-400">
                Heartbeat polling engine with automatic app categorization and idle detection.
              </p>
              <span className="inline-block text-[10px] font-mono text-blue-400/90 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Phase 2
              </span>
            </div>

            <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <GitBranch className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">GitHub & LeetCode</h4>
              <p className="text-xs text-slate-400">
                GraphQL integrations for commit frequency, streaks, and problem-solving metrics.
              </p>
              <span className="inline-block text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Phase 5
              </span>
            </div>

            <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Flame className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Goals & Team Sync</h4>
              <p className="text-xs text-slate-400">
                Productivity scores, team leaderboards, and optional end-to-end cloud sync.
              </p>
              <span className="inline-block text-[10px] font-mono text-rose-400/90 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                Phase 6 & 7
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Status Footer */}
      <footer className="h-8 border-t border-border px-6 flex items-center justify-between text-[11px] text-slate-400 bg-surface/30">
        <div className="flex items-center gap-2">
          <span>LockIn Core</span>
          <span>•</span>
          <span>Local-first SQLite</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Ready for Issue #2 (Database Architecture)</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
