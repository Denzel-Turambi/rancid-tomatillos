describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


//intercept the stub for the fetch
//give it mock data 


describe('dashboard', () => {
  // beforeEach(() => {
    // cy.visit('http://localhost:3000/')
    // .intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    //   statusCode:200
    // } )
  // })
  it('should display all movies on page load', () => {
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
          cy.visit('http://localhost:3000/')
          .get('nav').contains('h1', 'Rancid Tomatillos')
          .get('.all-movies-display').contains('.movie-container', 'Black Adam')
          .get('.all-movies-display').contains('.movie-container', '4/10')
          // .get('.movie-container').contains('.card')
        })
})




//check that the length equals the mock data
//test if the header displays 
//if the container is displaying the movies 
//check if movie is displaying, image title and rating

//next test click of the card 


