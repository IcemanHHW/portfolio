import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://icemanhhw.github.io',
  integrations: [
  ],
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
  }
});