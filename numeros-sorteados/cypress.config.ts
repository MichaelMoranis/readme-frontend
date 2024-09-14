import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // suas configurações de testes E2E
    baseUrl: 'http://localhost:5173',
  },
});
