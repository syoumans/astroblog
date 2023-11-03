import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://lustrous-otter-7bc8c9.netlify.app",
  integrations: [preact()]
});