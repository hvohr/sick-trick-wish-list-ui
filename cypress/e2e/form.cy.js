beforeEach(() => {
  cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
    statusCode: 200,
    fixture: 'tricks.json'
  })
    .as('tricks')
    .visit("http://localhost:3000/")
})
describe('Form should have correct aspects', () => {
  it('should have a stance input with two options', () => {
    cy.wait('@tricks')
    cy.get('form')
    cy.get('.stance-container')
    cy.contains('Regular')
    cy.contains('Switch')
  })
  it('should have a obstacle input with options', () => {
    cy.wait('@tricks')
    cy.get('form')
    cy.get('.obstacle-container')
    cy.contains('Flatground')
    cy.contains('Pool')
  })
  it('should fill out the form and display it on the homepage', () => {
    cy.wait('@tricks')
    cy.get('input[type="textArea"]').type('kickflip')
    cy.get('.stance-select').select('Regular')
    cy.get('.obstacle-select').select('Pool')
    cy.get('input[type="text"]').type('youtubelink')
    cy.get('button[type="submit"]').click()
    .get('.trick-list-container').contains('regular kickflip')
  })
})