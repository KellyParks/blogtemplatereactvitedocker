import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // this is required for docker's port mapping
    strictPort: true, //set to true to exit if port is already in use, instead of automatically trying the next available port
    port: 5173
  }
})
