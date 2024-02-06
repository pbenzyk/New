describe('Create task', function () {

  it('CT02', function () {
    cy.visit("https://app.todoist.com/auth/login")
    cy.get('#element-0').type('bennita42+1@gmail.com')
    cy.get('#element-3').type('Punya1234')
    cy.get('._966b120f > .F9gvIPl').click()
    cy.get('.EnOQGHT').contains('Today')
    cy.get('.plus_add_button').click()
    cy.get('.task_editor__footer__action-buttons > ._7a4dbd5f').should('have.attr', 'aria-disabled', 'true')

  }),
    it('CT03', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('.EnOQGHT').contains('Today')
      cy.get('.plus_add_button').click()
      cy.get('.task_editor__description_container > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Description 01')
      cy.get('.task_editor__footer__action-buttons > ._7a4dbd5f').should('have.attr', 'aria-disabled', 'true')

    }),
    it('CT04', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('.EnOQGHT').contains('Today')
      cy.get('.plus_add_button').click()
      cy.get('._54d56775').click()
      cy.get('.plus_add_button').contains('Add task')
    }),
    it('CT05', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('.EnOQGHT').contains('Today')
      cy.get('.plus_add_button').click()

      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Task 01')
      cy.get('.task_editor__description_container > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Description 01')


      cy.get('._54d56775').click()
      cy.get('.ac28a3b1 > .fb8d74bb > span').contains('Are you sure you want to discard your current task?')
      cy.get('.b75f86cd > ._14423c92 > ._54d56775').contains('Cancel')
      cy.get('.b75f86cd > ._14423c92 > ._7a4dbd5f').contains('Discard task')

    }),
    it('CT06', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('.EnOQGHT').contains('Today')
      cy.get('.plus_add_button').click()

      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Task 01')
      cy.get('.task_editor__description_container > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Description 01')


      cy.get('._54d56775').click()
      cy.get('.ac28a3b1 > .fb8d74bb > span').contains('Are you sure you want to discard your current task?')
      cy.get('.b75f86cd > ._14423c92 > ._54d56775').click()
      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > p')
        .contains('New Task 01')
    }),
    it('CT07', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click()
      cy.get('.EnOQGHT').contains('Today')
      cy.get('.plus_add_button').click()

      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Task 01')
      cy.get('.task_editor__description_container > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
        .type('New Description 01')


      cy.get('._54d56775').click()
      cy.get('.ac28a3b1 > .fb8d74bb > span').contains('Are you sure you want to discard your current task?')
      // cy.get('.b75f86cd > ._14423c92 > ._54d56775').contains('Cancel')
      cy.get('.b75f86cd > ._14423c92 > ._7a4dbd5f').click()

      cy.get('.plus_add_button').contains('Add task')
    })
  it('CT01', function () {
    cy.visit("https://app.todoist.com/auth/login")
    cy.get('#element-0').type('bennita42+1@gmail.com')
    cy.get('#element-3').type('Punya1234')
    cy.get('._966b120f > .F9gvIPl').click()
    cy.get('.EnOQGHT').contains('Today')
    cy.get('.plus_add_button').click()
    cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
      .type('New Task 01')
    cy.get('.task_editor__description_container > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > .is-empty')
      .type('New Description 01')
    cy.get('[data-testid="task-editor-submit-button"]').click()
    cy.get('.task_list_item__body > .c3b69d70').contains('New Task 01')
  }),

    it('UT02', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click().wait(1000)
      cy.get('.EnOQGHT').contains('Today')
      cy.get('#task-7653287619-content > ._14423c92').contains('New Task 01').as('UT01')
      cy.get('@UT01').click()
      cy.get('.task-overview-content').click()
      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > p').clear()
      cy.get('.is-empty').type('New Task 02')
      cy.get('.task_editor__editing_area').clear().type('New Task 02')
      cy.get('._54d56775').click()
    }),
    it('UT03', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click().wait(1000)
      cy.get('.EnOQGHT').contains('Today')

      cy.get('#task-7653287619-content > ._14423c92').contains('New Task 01').as('UT01')
      cy.get('@UT01').click()

      cy.get('.task-overview-content').click()
      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > p').clear()
      cy.get('.is-empty').type('New Task 02')
      cy.get('.task_editor__editing_area').clear().type('New Task 02')
      cy.get('._14423c92 > :nth-child(4) > ._8313bd46').click()
    }),

    it('UT01', function () {
      cy.visit("https://app.todoist.com/auth/login")
      cy.get('#element-0').type('bennita42+1@gmail.com')
      cy.get('#element-3').type('Punya1234')
      cy.get('._966b120f > .F9gvIPl').click().wait(1000)
      cy.get('.EnOQGHT').contains('Today')
      cy.get('#task-7653287619-content > ._14423c92').contains('New Task 01').as('UT01')
      cy.get('@UT01').click()
      cy.get('.task-overview-content').click()
      cy.get('.task_editor__content_field > ._14423c92 > ._560c1e08 > .UjpFDa7 > .tiptap > p').clear()
      cy.get('.is-empty').type('New Task 02')
      cy.get('.task_editor__editing_area').clear().type('New Task 02')
      cy.get('[data-testid="task-editor-submit-button"]').click()
      cy.get('._14423c92 > :nth-child(4) > ._8313bd46').click()
    })

})