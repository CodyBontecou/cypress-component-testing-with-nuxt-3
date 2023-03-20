import { mount } from 'cypress/vue'
import '../plugins/tailwind'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)
