describe('single movie details', () => {
  beforeEach(() => {
    cy.intercept('GET' ,'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      fixture: '.././fixtures/allMoviesData.json'
    })
    .visit('http://localhost:3000/')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495', {
      statusCode: 201,
      fixture: '.././fixtures/movieData724495.json'
    })
  })

  it('should allow the user to click on the first card to view movie details', () => {
    cy.get('#724495').click()
    .url().should('include', '/724495')
    .get('.movie-container').should('not.exist')
    .get('.movie-details').contains('h2', 'The Woman King')
    .get('.movie-details').contains('p', 'Her reign begins.')
    .get('.movie-details').contains('p', 'Average Rating: 40%')
    .get('.movie-details').contains('p', 'Runtime: 135 minutes')
    .get('.movie-details').contains('p', 'ReleaseDate: 2022-09-15')
    .get('.movie-details').contains('p', 'Overview: The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.')
    .get('.movie-details').contains('p', 'Genre(s): ActionDramaHistory')
    .get('.movie-details').contains('p', 'Revenue: $91000000')
    .get('.movie-details').contains('p', 'Budget: $50000000')
    .get('.movie-details').find("img").should('be.visible')
    .get('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg')
  })

  it('should allow the user to exit the movie details', () => {
    cy.get('#724495').click()
    .url().should('include', '/724495')
    .get('button').click()
    .url().should('include', '/')
    .get('nav').contains('h1', 'Rancid Tomatillos')
    .get('.all-movies-display').contains('.movie-container', 'The Woman King')
    .get('.all-movies-display').contains('.movie-container', '4/10')
    .get('.card').find("img").should('be.visible')
    .get('img[id="724495"]').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg')
  })
})
