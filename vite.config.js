import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base URL for GitHub Pages deployment
// eslint-disable-next-line no-undef
const base = process.env.NODE_ENV === 'production' ? '/cv-application-react/' : '/';

export default defineConfig({
  base, // Use the base URL determined dynamically
  plugins: [react()],
});
