describe('dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET' ,'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      fixture: '.././fixtures/allMoviesData.json'
    })
    .visit('http://localhost:3000/')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 201,
      fixture: '.././fixtures/movieData436270.json'
    })
  })

  it('should display all movies on page load', () => {
    cy.get('nav').contains('h1', 'Rancid Tomatillos')
    .url().should('include', '/')
    .get('.all-movies-display').contains('.movie-container', 'Black Adam')
    .get('.all-movies-display').contains('.movie-container', '4/10')
    .get('.card').find("img").should('be.visible')
  })

  it('should allow the user to click on the first card to view movie details', () => {
    cy.get('#436270').click()
    .url().should('include', '/436270')
    .get('.movie-container').should('not.exist')
    .get('.movie-details').contains('h2', 'Black Adam')
    .get('.movie-details').contains('p', 'The world needed a hero. It got Black Adam.')
    .get('.movie-details').contains('p', 'Average Rating: 40%')
    .get('.movie-details').contains('p', 'Runtime: 125 minutes')
    .get('.movie-details').contains('p', 'ReleaseDate: 2022-10-19')
    .get('.movie-details').contains('p', 'Overview: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    .get('.movie-details').contains('p', 'Genre(s): ActionFantasyScience Fiction')
    .get('.movie-details').contains('p', 'Revenue: $384571691')
    .get('.movie-details').contains('p', 'Budget: $200000000')
    .get('.movie-details').find("img").should('be.visible')
    .get('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
  })

  it('should allow the user to exit the movie details', () => {
    cy.get('#436270').click()
    .url().should('include', '/436270')
    .get('button').click()
    .url().should('include', '/')
    .get('nav').contains('h1', 'Rancid Tomatillos')
    .get('.all-movies-display').contains('.movie-container', 'Black Adam')
    .get('.all-movies-display').contains('.movie-container', '4/10')
    .get('.card').find("img").should('be.visible')
    .get('img[id="436270"]').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  })
})
