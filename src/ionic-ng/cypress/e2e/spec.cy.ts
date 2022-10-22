describe('Home Page', () => {
  it('Gets a coming soon message', () => {
    cy.visit('/')
    cy.contains('Coming soon!')
  })
})
