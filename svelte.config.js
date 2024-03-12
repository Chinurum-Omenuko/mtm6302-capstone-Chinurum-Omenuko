import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: '200.html'
        }),
        paths: {
            base: '/mtm6302-capstone-Chinurum-Omenuko',
        }
        // other kit options...
    },
};

export default config;

