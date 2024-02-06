describe('Register flow with email and password', function () {

  before("Goto link", function () {
    cy.clearAllCookies()
    cy.visit("https://app.todoist.com/auth/signup")

  }),
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    }),
    it('Re02', function () {
      cy.register('bennita42@gmail.com', null, '._8f5b5f2b', "Oh no, this email address is unavailable! Please try a different address.")
    }),
    it.skip('Re03', function () {
      cy.register(null, null, '._8f5b5f2b', "Please enter a valid email address.")
    }),
    it.skip('Re04', function () {
      cy.register('test01@gmail', null, '._8f5b5f2b', "Please enter a valid email address.")
    }),
    it.skip('Re05', function () {
      cy.register('test01@gmail.com', '1234', '._8f5b5f2b', 'Passwords must be at least 8 characters long.')

      cy.visit("https://app.todoist.com/auth/signup")
    }),
    it.skip('Re06', function () {
      cy.register('test01@gmail.com', null, '._8f5b5f2b', 'Passwords must be at least 8 characters long.')
    }),
    it.skip('Re07', function () {
      cy.visit("https://app.todoist.com/auth/signup")
      cy.get('#element-3').type('123456789')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('._8f5b5f2b').contains('Please enter a valid email address.')
    }),
    it.skip('Re08', function () {
      
      cy.register(null, '123456789', '._8f5b5f2b', 'Passwords must be at least 8 characters long.', true)


      // cy.visit("https://app.todoist.com/auth/signup")
      // cy.get('#element-3').type('123456789')
      // cy.get('.dbbd207e > ._8313bd46').click()
      // cy.get('input#element-3').should('have.value', '123456789')
    }),
    it.skip('Re09', function () {
      cy.visit("https://app.todoist.com/auth/signup")
      cy.get('.fEyPXtB._1c09cd18 > a').contains('Go to login').as('GotoLogin')
      cy.get('@GotoLogin').click({ force: true })
    }),
    it.skip('Re10', function () {
      cy.visit("https://app.todoist.com/auth/signup")
      cy.get('#element-0').type('prim.y@neversitup.com')
      cy.get('#element-3').type('prim12345678')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('#element-5').contains('This password is too easy to guess. Try using something stronger.')
    }),
    it.skip('Re11', function () {
      cy.visit("https://app.todoist.com/auth/signup")
      cy.get('#element-0').type('prim.y@neversitup.com')
      cy.get('#element-3').type('prim12345678')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('._8f5b5f2b').contains('Oh no, this email address is unavailable! Please try a different address.')
    }),
    it.skip('Re01', function () {
      cy.visit("https://app.todoist.com/auth/signup")
      cy.get('#element-0').type('bennita42+3@gmail.com')
      cy.get('#element-3').type('prim1234')
      cy.get('._966b120f > .F9gvIPl').click()
    })

})