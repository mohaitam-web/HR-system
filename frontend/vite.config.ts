import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

//docker compose cp frontend:/app/package.json ./frontend/package.json

//docker compose cp frontend:/app/package-lock.json ./frontend/package-lock.json
