import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Manually load the .env.local file
dotenv.config({ path: '.env.local' });

// Check if env variables are loaded (you can see this in the terminal log when you run the dev server)
console.log(process.env);

export default defineConfig({
  plugins: [react()],
});
