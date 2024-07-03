/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineTestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const testConfig = defineTestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/tests/unit_and_integration/setup.ts',
  },
});

const envConfig = defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
});

export default mergeConfig(testConfig, envConfig);
