import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // This explicitly replaces "process.env.API_KEY" in your code with the actual string value during build.
      // This is crucial for the Google GenAI library to work in the browser.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      
      // This is a fallback to prevent the app from crashing if some library tries to access "process.env" directly.
      'process.env': {}
    },
  };
});