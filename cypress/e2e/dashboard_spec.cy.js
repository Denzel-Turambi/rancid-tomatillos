describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


//intercept the stub for the fetch
//give it mock data 


describe('dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET' ,'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {
          "movies": [
              {
                  "id": 436270,
                  "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
                  "title": "Black Adam",
                  "average_rating": 4,
                  "release_date": "2022-10-19"
              },
      {
                  "id": 760104,
                  "poster_path": "https://image.tmdb.org/t/p/original//woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg",
                  "title": "X",
                  "average_rating": 1,
                  "release_date": "2022-03-17"
                }
              ]
            }
          })
    .visit('http://localhost:3000/')
  })
  it('should display all movies on page load', () => {
    cy.get('nav').contains('h1', 'Rancid Tomatillos')
    .get('.all-movies-display').contains('.movie-container', 'Black Adam')
    .get('.all-movies-display').contains('.movie-container', '4/10')
    .get('.card').find("img").should('be.visible')
  })

  it('should allow the user to click on a card to view movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 201,
      body: {
        "movie": {
          "id": 436270,
          "title": "Black Adam",
          "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          "release_date": "2022-10-19",
          "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          "genres": [
              "Action",
              "Fantasy",
              "Science Fiction"
          ],
          "budget": 200000000,
          "revenue": 384571691,
          "runtime": 125,
          "tagline": "The world needed a hero. It got Black Adam.",
          "average_rating": 4
        }
      }
    })
    .get('#436270').click()
    // .url().should('include', '/')
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
  })

  it('should allow the user to exit the movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 201,
      body: {
        "movie": {
          "id": 436270,
          "title": "Black Adam",
          "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          "release_date": "2022-10-19",
          "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          "genres": [
              "Action",
              "Fantasy",
              "Science Fiction"
          ],
          "budget": 200000000,
          "revenue": 384571691,
          "runtime": 125,
          "tagline": "The world needed a hero. It got Black Adam.",
          "average_rating": 4
        }
      }
    })
    .get('#436270').click()
    // .url().should('include', '/')
    .get('button').click()
    // .url().should('include', '/')
    .get('nav').contains('h1', 'Rancid Tomatillos')
    .get('.all-movies-display').contains('.movie-container', 'Black Adam')
    .get('.all-movies-display').contains('.movie-container', '4/10')
    .get('.card').find("img").should('be.visible')
  })
})
