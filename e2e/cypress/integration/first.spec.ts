/// <reference types="cypress"/>

describe('Login Test', () => {
  it('should login to the website', () => {
    // visit 'login page'
    cy.visit('/login');
    // assert if we are in good place - search for a 'smarter world phrase
    cy.contains('Login');

    // Type into username field and assert the value is there
    cy.get('#username')
      .type('test@test.com').should('have.value', 'test@test.com');

    // Type into the password field
    cy.get('#password')
    .type('Password123')
    // .should('have.value', 'test@test.com')

    // Click on the SIGN IN button
    cy.get('#signInButton').click()

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/student/registration');
    });
  });

  it('should fill in the registration fields', () => {
    cy.get('#studentID')
      .type('12345678').should('have.value', '12345678');
    cy.get('#fullName')
      .type('Sebastian Southern').should('have.value', 'Sebastian Southern')
    cy.get('#preferredName')
    .type('Sebastian').should('have.value', 'Sebastian')
    cy.get('#faculty')
      .type('Engineering').should('have.value', 'Engineering');
    cy.get('#courseID')
      .type('C100026').should('have.value', 'C100026');
    cy.get('#email')
      .type('test123@student.uts.edu.au').should('have.value', 'test123@student.uts.edu.au');
    cy.get('#preferredContactNumber')
    .type('041234567').should('have.value', '041234567');

  });
})