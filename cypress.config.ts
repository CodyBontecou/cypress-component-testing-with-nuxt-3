import { defineConfig } from 'cypress'
import viteConfig from './vite.config.cypress.component'

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig,
    },
  },
})
