// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('register', (email, password, errorClass,
    errorText, checkValue) => {
    cy.visit("https://app.todoist.com/auth/signup")
    email ? cy.get('#element-0').type(email) : cy.get('#element-0') // email
    password ? cy.get('#element-3').type(password) : cy.get('#element-3') // password
    cy.get('._966b120f > .F9gvIPl').click()
    if (checkValue) {
        cy.get(errorClass).should('have.value', password)
    } else {
        errorClass ? cy.get(errorClass).contains(errorText) : cy.get(errorClass)
    }
})

Cypress.Commands.add('login', (email, password, element, errorText) => {
    cy.visit("https://app.todoist.com/auth/login")
    cy.get('#element-0').type(email)
    cy.get('#element-3').type(password)
    cy.get('._966b120f > .F9gvIPl').click()
    cy.get(element).contains(errorText)

})