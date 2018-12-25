function beforeSteps() {
  cy.visit( '/' );
}

describe( 'The index page renders', () => {
  before(() => {
    beforeSteps();
  });

  it( 'Loads!', () => {
    cy.get( 'html' ).should( 'be.visible' );
  });
});

describe( 'The initial state of the page', () => {
  before(() => {
    beforeSteps();
  });

  it( 'Has article cards', () => {
    cy.get( '[data-cy="card-articles"]' ).should( 'be.visible' );
  });

  it( 'Has a header', () => {
    cy.get( '[data-cy="header"]' ).should( 'be.visible' );
  });

  it( 'Has a footer', () => {
    cy.get( '[data-cy="footer"]' ).should( 'be.visible' );
  })
});

describe( 'The card articles', () => {
  it( 'Each card has a valid link that does not 404', () => {
    cy.get( '[data-cy="card-article"]' ).each( ( $el, index ) => {
      beforeSteps();

      $el.click();

      cy.contains( '404' ).should( 'not.be.visible' );
    });
  });
});




