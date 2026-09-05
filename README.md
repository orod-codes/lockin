# 🔒 LockIn — Developer Productivity Tracker

A fully free, open-source, local-first, cross-platform productivity tracker that monitors PC activity and aggregates developer commitment across GitHub, LeetCode, and more — with optional cloud sync and team features.

![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/built%20with-TypeScript-3178C6)

---

## ✨ Features

### 🖥️ Activity Tracking
- **Active window monitoring** — tracks which app you're using every second
- **Automatic categorization** — coding, browsing, learning, communication, entertainment
- **Idle detection** — pauses tracking when you step away
- **Browser URL tracking** — companion extension captures actual URLs visited
- **Timeline view** — visual horizontal timeline of your day

### 🐙 Platform Integrations
- **GitHub** — commits, PRs, issues, contribution streaks, heatmap
- **LeetCode** — problems solved (easy/medium/hard), contest rating, streaks
- More platforms coming soon (CodeForces, Telegram, Stack Overflow)

### 🎯 Goals & Streaks
- Set daily/weekly goals ("Code 4h/day", "Solve 2 LC problems/day")
- Track streaks across coding, GitHub, and LeetCode
- Productivity score (0-100)

### 👥 Team Features
- Create/join teams with invite codes
- Leaderboard — ranked by coding hours, commits, problems solved
- Shared team goals with collective progress tracking
- Privacy-first: only aggregated summaries are shared

### ☁️ Optional Cloud Sync
- 100% local by default — your data never leaves your machine
- Opt-in Supabase sync for cross-device access and team features
- Only daily summaries are synced, never raw window titles or URLs

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│         LockIn Desktop App (Electron)        │
│                                              │
│  ┌──────────┐  ┌────────────┐  ┌─────────┐  │
│  │ Activity  │  │ Integration│  │  Sync   │  │
│  │ Tracker   │  │ Scheduler  │  │ Engine  │  │
│  └─────┬─────┘  └─────┬──────┘  └────┬────┘  │
│        │              │              │        │
│        ▼              ▼              ▼        │
│  ┌─────────────────────────────────────────┐  │
│  │            SQLite (local)               │  │
│  └─────────────────────────────────────────┘  │
│        │                                      │
│        ▼                                      │
│  ┌─────────────────────────────────────────┐  │
│  │     Dashboard UI (React + Tailwind)     │  │
│  └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
        │                          │
        ▼                          ▼
 ┌──────────────┐          ┌──────────────┐
 │   Browser    │          │   Supabase   │
 │  Extension   │          │  (optional)  │
 └──────────────┘          └──────────────┘
```

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Desktop Shell** | Electron |
| **Language** | TypeScript |
| **Frontend** | React 18 + Tailwind CSS + Recharts |
| **Database** | SQLite (better-sqlite3) |
| **Bundler** | Vite |
| **Cloud (optional)** | Supabase (PostgreSQL + Auth + Realtime) |
| **Window Tracking** | @paymoapp/active-window |
| **CI/CD** | GitHub Actions |

## 📁 Project Structure

```
lockin/
├── .github/workflows/         # CI/CD for Win/Mac/Linux
├── extension/                 # Browser extension (Manifest V3)
├── resources/                 # App icons
├── src/
│   ├── main/                  # Electron main process
│   ├── tracker/               # Activity tracking engine
│   ├── integrations/          # GitHub, LeetCode, etc.
│   ├── database/              # SQLite data layer
│   ├── cloud/                 # Optional Supabase sync
│   ├── renderer/              # Dashboard UI (React)
│   │   ├── pages/
│   │   ├── components/
│   │   └── hooks/
│   └── shared/                # Shared types & constants
├── supabase/                  # Cloud schema (optional)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── electron-builder.yml
```

## 🗺️ Roadmap

- [x] Implementation plan
- [ ] Phase 1: Project scaffolding (Electron + TypeScript + Vite + React)
- [ ] Phase 2: Activity tracker core (window tracking, idle detection)
- [ ] Phase 3: Browser extension + URL tracking
- [ ] Phase 4: Dashboard UI (overview, timeline, settings)
- [ ] Phase 5: GitHub + LeetCode integration
- [ ] Phase 6: Goals & streaks
- [ ] Phase 7: Cloud sync & team features
- [ ] Phase 8: Polish & first release

## 🤝 Contributing

Contributions are welcome! Please read the contributing guide (coming soon) before submitting PRs.

## 📄 License

[MIT](LICENSE)
