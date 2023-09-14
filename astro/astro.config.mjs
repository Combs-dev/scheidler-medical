import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from 'astro-sanity';
import netlify from "@astrojs/netlify/functions";

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: 'https://scheidlermedical.com',
  integrations: [tailwind(), react(), sitemap(), sanity({
    projectId: 'vfh8d0hi',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
    }), webmanifest({name: "Scheidler Medical Preferred"})],
  output: "server",
  adapter: netlify()
});
