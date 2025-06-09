import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    coverage: {
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/layouts/**/*.{ts,tsx}',
        'src/pages/**/*.{ts,tsx}',
        'src/helpers/**/*.{ts,tsx}',
        'src/styles/**/*.{ts,tsx}'
      ]
    },
    alias: {
      '@': new URL('./src/', import.meta.url).pathname
    }
  },
  resolve: {
    alias: {
      '@': new URL('./src/', import.meta.url).pathname
    }
  }
});
