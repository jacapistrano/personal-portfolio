# John Amiel Capistrano — Front-End Portfolio

A responsive portfolio built with React, Vite, Tailwind CSS v4, and Lucide React. The content is focused on front-end development, web experiences, responsive design, and mobile-friendly interfaces.

## Requirements
- Node.js 18+
- npm
- Visual Studio Code (recommended)

## Run locally
1. Extract the ZIP file.
2. Open the `personal_portfolio` folder in VS Code.
3. Open the integrated terminal.
4. Install packages:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Vite creates the production-ready website in the `dist` folder.

## Tailwind CSS
Tailwind CSS v4 is configured through `@tailwindcss/vite` in `vite.config.js` and imported in `src/index.css`.

## Main files
- `src/App.jsx` — page content and React components
- `src/index.css` — Tailwind import and global styles
- `src/main.jsx` — React entry point
- `vite.config.js` — Vite, React, and Tailwind configuration
- `package.json` — project dependencies and scripts
