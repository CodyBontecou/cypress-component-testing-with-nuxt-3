import Hello from '../../components/Hello.vue'

describe('Hello.cy', () => {
  it('renders', () => {
    cy.mount(Hello)
  })
})
