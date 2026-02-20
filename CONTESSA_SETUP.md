# Contessa LMS Setup (Clean Start)

This clone keeps the LMS/game code but does **not** seed student rosters or ESOL content.

## 1) Configure environment

```bash
cp .env.example .env
```

Set `POSTGRES_URL` in `.env` to a fresh database, for example:

```env
POSTGRES_URL="postgresql://localhost:5432/contessa_lms"
```

## 2) Install + migrate schema

```bash
npm install
npx prisma migrate deploy
```

## 3) Seed safe starter account only

```bash
npm run db:seed
```

Default starter login:
- username: `contessa_owner`
- password: `change-me-now`

You will be prompted to change password on first login.

## 4) Run app

```bash
npm run dev
```

Open: http://localhost:3000

## Important

Avoid these commands unless you intentionally want legacy ESOL content:
- `npm run db:seed:grammar`
- `npm run db:seed:users`
- `npm run db:seed:vocab`
- `npm run db:seed:full`
