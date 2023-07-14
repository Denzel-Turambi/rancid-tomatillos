describe('error handling', () => {
  it('should display an error message when network request for all movies fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 501
  })
  .visit('http://localhost:3000/')
  .url().should('include', '/')
  .get('h1').contains('An error occurred while fetching movies.')
  })

  it('should display an error message when fetching single movie detail fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      fixture: '.././fixtures/allMoviesData.json'
  })
    .visit('http://localhost:3000/')
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 501
    })
    .get('#436270').click()
    .url().should('include', '/436270')
    .get('h1').contains('SyntaxError: Unexpected end of JSON input. Please try again later.')
  })
})