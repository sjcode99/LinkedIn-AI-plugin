import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    host_permissions: ['*://*.google.com/*', "https://www.linkedin.com/*"],
    content_scripts: [
      {
        matches: ["https://www.linkedin.com/*"],
        js: ["content-scripts/overlay.js"],
      }
    ]
  }
});
