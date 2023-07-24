beforeEach(() => {
  cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
    statusCode: 200,
    fixture: 'tricks.json'
  })
    .as('tricks')
    .visit("http://localhost:3000/")
})
describe('Front page should have proper aspects', () => {
  it('should have a title', () => {
    cy.wait('@tricks')
      .get('h1')
      .contains('Sick Trick Wish List')
  })
  it('should have fetched data', () => {
    cy.wait('@tricks')
      .get('.trick-display')
      .get('.trick-list-container')
      .get('.trick-card-container').should('exist')
  })
})