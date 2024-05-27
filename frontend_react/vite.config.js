import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config({path:'../.env'});
const FRONTEND_PORT = process.env.FRONTEND_PORT;
const BACKEND_PORT = process.env.BACKEND_PORT;

const targetApiUrl = 'https://vish-rentify-project.onrender.com';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: FRONTEND_PORT || 3000,
    proxy: {
      '/api': { // Matches requests starting with '/api'
        target: targetApiUrl, // Replace with your API URL
        changeOrigin: true, // Preserves the host header
        rewrite: (path) => path.replace(/^\/api/,''), // Removes '/api' from request path
      },
    },
  }
})
