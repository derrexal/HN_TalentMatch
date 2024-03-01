import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/weatherforecast': {
                target: 'http://hn_talentmatch.server:80/',
                secure: false
            },
            '^/resumes': {
                target: 'http://hn_talentmatch.server:80/',
                secure: false
            },
            '^/vacancies': {
                target: 'http://hn_talentmatch.server:80/',
                secure: false
            }
        },
        host: '0.0.0.0',
        port: 5173
    }
})
