import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary: '#6366f1',
              secondary: '#8b5cf6',
            },
          },
        },
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
        plugins: [],
      },
    }),
  ],
})
