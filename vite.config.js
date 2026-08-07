import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: eggalumni.tech
// base: '/' is correct for custom domains (assets load from domain root)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
