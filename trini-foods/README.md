# 🇹🇹 Trini Tastes

A celebration of Trinidad & Tobago cuisine — built for Vercel.

## Project Structure

```
trini-foods/
├── public/
│   └── index.html        # Frontend homepage
├── api/
│   ├── dishes.js         # GET /api/dishes - returns featured dishes
│   └── subscribe.js      # POST /api/subscribe - newsletter signup
├── vercel.json           # Vercel config
└── package.json
```

## Deploy to Vercel (3 ways)

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
cd trini-foods
vercel
```
Follow the prompts. Then `vercel --prod` to push to production.

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects everything
4. Click Deploy

### Option 3 — Drag & Drop
Zip the folder and drag it into the Vercel dashboard.

## Local Development

```bash
npm i -g vercel
vercel dev
```
Then open http://localhost:3000

## Next Steps to Build From Here

1. **Add a database** for the newsletter — Vercel KV or Supabase
2. **Add more pages** — recipes detail, culture/history, contact
3. **Add real photos** of each dish (currently uses emojis)
4. **CMS integration** so you can add recipes without code (Sanity, Contentful)
5. **Search & filtering** for dishes by category, region, or dietary needs

## API Endpoints

- `GET /api/dishes` — Returns array of featured dishes
- `POST /api/subscribe` — Body: `{ "email": "..." }` — Newsletter signup

## Tech

- Vanilla HTML/CSS/JS (no build step, fast to deploy)
- Vercel serverless functions for the backend
- Trinidad flag colors: red `#CE1126`, white `#FFFFFF`, black `#000000`
