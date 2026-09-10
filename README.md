# Premium Artist Gallery

Production-oriented React + TypeScript gallery with a secure API boundary, SQLite persistence, Google Drive storage abstraction, responsive editorial design, and an advanced artwork viewer.

## Run
1. Copy `.env.example` to `.env` and set `JWT_SECRET` and admin credentials.
2. Install dependencies from the root: `npm install`.
3. Run: `npm run dev`.
4. Public site: http://localhost:5173
5. Admin: http://localhost:5173/admin/login

Google Drive is optional for the first local run. To enable uploads, configure OAuth client credentials and the root Drive folder. The browser never receives Google secrets.

## Production notes
- Replace the demo admin password with a real password hash/user store.
- Put the API behind HTTPS.
- Use a managed DB if needed at scale.
- For large collections, replace `/api/artworks/:id/image` with a CDN/image proxy or IIIF tile service without changing the React artwork components.
