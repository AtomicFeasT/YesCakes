import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-ignore
const isGithubPagesDeploy = process.env.GH_PAGES

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGithubPagesDeploy ? '/YesCakes/' : "./"
})
