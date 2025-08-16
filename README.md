# TeamCollab Lite

A simple **full-stack collaboration app** built with:

- **Frontend**: React + Tailwind + TypeScript
- **Backend**: NestJS + PostgreSQL
- **Auth**: JWT login/signup
- **Features**: Task board (CRUD) + Simple chat (Socket.io)

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
yarn install
# configure PostgreSQL connection in src/config/ormconfig.ts
yarn start:dev
```

### Frontend Setup

```bash
cd frontend
yarn install
yarn dev
```

### Default Seed User

```
email: demo@teamcollab.app
password: demo123
```

## Repo Structure

```
teamcollab-lite/
  backend/    # NestJS API + WebSockets
  frontend/   # React + Tailwind app
```

This project is made to **showcase full-stack skills** for recruiters.
