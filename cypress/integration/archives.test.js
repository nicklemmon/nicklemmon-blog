/// <reference types="Cypress" />

function beforeSteps() {
  cy.visit( '/archives' )
}

describe( 'The archives page', () => {
  beforeEach( () => beforeSteps() )

  it( 'renders 5 links', () => {
    cy.get( '[data-cy="card-article"]' ).should( 'exist' )
  } )

  describe( 'article links', () => {
    before( () => cy.visit( '/archives' ) )

    it( 'navigates to a new article on click', () => {
      cy.get( '[data-cy="card-article"]' ).each( $el => {
        beforeSteps()

        $el.click()

        cy.title().should( 'not.include', 'Archives' )
        cy.contains( '404' ).should( 'not.be.visible' )
      } )
    } )
  } )
} )
