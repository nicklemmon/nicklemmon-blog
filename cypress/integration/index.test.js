describe( 'The index page renders', () => {
  before(() => {
    cy.visit( '/' );
  });

  it( 'Loads!', () => {
    cy.get( 'html' ).should( 'be.visible' );
  });
});
