describe('Login flow with email and password', function () {

  it('Lo02', function () {
cy.login('bennita42+0@gmail.com','Punya1234','._8f5b5f2b',"Wrong email or password.")
cy.login(null,null,'._8f5b5f2b',"Wrong email or password.")
  }),

    it('Lo03', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('test01@gmail')
      // cy.get('#element-3').type('1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('._8f5b5f2b').contains("Please enter a valid email address.")
    }),
    it('Lo04', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+0@gmail.com')
      cy.get('#element-3').type('1234')
      cy.get('._966b120f > .F9gvIPl').click().wait(5000)
      cy.get('._8f5b5f2b').contains('Wrong email or password.')
    }),
    it('Lo05', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('test01@gmail.com')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('._8f5b5f2b').contains('Passwords must be at least 8 characters long.')
    }),
    it('Lo06', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-3').type('123456789')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('._8f5b5f2b').contains('Please enter a valid email address.')
    }),
    it('Lo07', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-3').type('123456789')
      cy.get('.dbbd207e > ._8313bd46').click()
      cy.get('input#element-3').should('have.value', '123456789')
    }),
    it('Lo08', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('test01@gmail.com')
      cy.get('#element-3').type('1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('._8f5b5f2b').contains("Wrong email or password.")
    }),
    it('Lo09', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('.fEyPXtB._1c09cd18 > a').contains('Sign up').as('Signup')
      cy.get('@Signup').click({ force: true })
    }),

    it('Lo01', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('.EnOQGHT').contains('Today')
    })

})