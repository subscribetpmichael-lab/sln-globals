import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GITHUB_PAGES=true (set in the GH Actions workflow) builds with the /repo/ base path
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_PAGES === "true" ? "/sln-globals/" : "/",
})
