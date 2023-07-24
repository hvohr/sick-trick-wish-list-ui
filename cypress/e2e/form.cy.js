beforeEach(() => {
  cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
    statusCode: 200,
    fixture: 'tricks.json'
  })
    .as('tricks')
    .visit("http://localhost:3000/")
})
describe('Form should have correct aspects', () => {
  it('should have two selects and two inputs', () => {
    
  })
})