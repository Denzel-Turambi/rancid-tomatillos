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
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/760104', {
      statusCode: 201,
      fixture: '.././fixtures/movieData760104.json'
    })
  })

  it('should allow the user to click on the second card to view movie details', () => {
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
    .get('.movie-details').find("img").should('be.visible')
    .get('img[class="movie-details-img"]').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg')
  })

  it('should allow the user to exit the movie details', () => {
    cy.get('#724495').click()
    .url().should('include', '/724495')
    .get('button').click()
    .url().should('include', '/')
    .get('nav').contains('h1', 'Rancid Tomatillos')
    .get('.all-movies-display').contains('.movie-container', 'The Woman King')
    .get('.all-movies-display').contains('.movie-container', '40%')
    .get('.card').find("img").should('be.visible')
    .get('img[id="724495"]').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg')
  })

  it('should allow the user to click on the second card to view movie details', () => {
    cy.get('#760104').click()
    .url().should('include', '/760104')
    .get('.movie-container').should('not.exist')
    .get('.movie-details').contains('h2', "X")
    .get('.movie-details').contains('p', "Dying to show you a good time.")
    .get('.movie-details').contains('p', 'Average Rating: 10%')
    .get('.movie-details').contains('p', 'Runtime: 106 minutes')
    .get('.movie-details').contains('p', 'ReleaseDate: 2022-03-17')
    .get('.movie-details').contains('p', 'Overview: In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives. Hilarity ensues.')
    .get('.movie-details').contains('p', 'Genre(s): HorrorMysteryThriller')
    .get('.movie-details').find("img").should('be.visible')
    .get('img[class="movie-details-img"]').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg')
  })

  it('should allow the user to exit the movie details', () => {
    cy.get('#760104').click()
    .url().should('include', '/760104')
    .get('button').click()
    .url().should('include', '/')
    .get('nav').contains('h1', 'Rancid Tomatillos')
    .get('.all-movies-display').contains('.movie-container', 'X')
    .get('.all-movies-display').contains('.movie-container', '10%')
    .get('.card').find("img").should('be.visible')
    .get('img[id="760104"]').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//woTQx9Q4b8aO13jR9dsj8C9JESy.jpg')
  })
  
})
