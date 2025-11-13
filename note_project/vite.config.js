import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Website-create/note_project/',
  plugins: [react()],
  build: {
    outDir: '../docs/note_project',
  },
})
