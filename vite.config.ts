import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from "path"
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ['@radix-ui/react-dropdown-menu'],
  },
  server: {
    allowedHosts: ['a762-124-253-79-91.ngrok-free.app'],
    host: true, // ensure the server binds to 0.0.0.0
  },
})