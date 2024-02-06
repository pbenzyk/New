describe('Login flow with email and password', function () {

  it.skip('Check cookie', function () {
    cy.visit("www.set.or.th").wait(5000)
    cy.get('.mb-2 > .btn').click()
    cy.get('.raw-html > span').contains(
      'กลุ่มตลาดหลักทรัพย์แห่งประเทศไทยใช้คุกกี้ (Cookies) เพื่อมอบประสบการณ์การใช้งานที่ดีที่สุดบนเว็บไซต์และแอปพลิเคชันของกลุ่มตลาดหลักทรัพย์ฯ ให้แก่ท่าน รวมทั้งเพื่อช่วยเพิ่มประสิทธิภาพการใช้งาน ท่านสามารถศึกษารายละเอียดเพิ่มเติมได้ที่'
    )
    cy.get('.align-self-md-center > .btn').click()

  }),
  it.skip('check login page', function () {
    cy.visit("www.set.or.th").wait(5000)
    cy.get('.mb-2 > .btn').click()
    cy.get('.set-member-wrapper > .d-none').click({force: true})
    cy.get('.title').contains('ลงชื่อเข้าใช้งาน')
    cy.get('.title2').contains('โดยใช้สมาชิก SET Member')
    cy.get('.forgot-password > .orange-link').contains('ลืมรหัสผ่าน?')
    cy.get('.copy-right').contains('Copyright © 2005 The Stock Exchange of Thailand.')
  }),
  it('login sucess', function () {
    cy.visit("www.set.or.th").wait(5000)
    cy.get('.mb-2 > .btn').click()
    cy.get('.set-member-wrapper > .d-none').click({force: true})

    cy.get('.username-input > .input-text').type(' true email')
    cy.get('.password-input > .input-text').type(' true password')
    cy.get('.button-submit').click().wait(5000)

    cy.get('.flex-column > .fs-20px').contains(' true name ')
  })

})