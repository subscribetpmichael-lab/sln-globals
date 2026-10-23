import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages serves the site from the custom domain slnglobals.com,
// so assets resolve at the root path. (If serving via the
// github.io/sln-globals URL again, switch base back to "/sln-globals/".)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
})
