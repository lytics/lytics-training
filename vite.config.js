import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // Replace __GTM_CONTAINER_ID__ placeholder with environment variable at build time
    {
      name: 'html-gtm-transform',
      transformIndexHtml(html) {
        const gtmId = process.env.VITE_GTM_ID || '__GTM_CONTAINER_ID__'
        return html.replace(/__GTM_CONTAINER_ID__/g, gtmId)
      }
    }
  ],
})
