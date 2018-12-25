function beforeSteps() {
  cy.visit( '/' );
}

describe( 'The navigation behavior', () => {
  before( () => beforeSteps() );

  it( 'Opens when the button is clicked', () => {
    cy.get( '[data-cy="navigation-button"]' )
      .click()
      .should( 'have.attr', 'aria-expanded', 'true' );

    cy.get( '[data-cy="navigation-menu"]' ).should( 'be.visible' );
  });

  it( 'Closes when the button is clicked again', () => {
    cy.get( '[data-cy="navigation-button"]' )
      .click()
      .should( 'have.attr', 'aria-expanded', 'false' );

    cy.get( '[data-cy="navigation-menu"]' ).should( 'not.be.visible' );
  });
});
