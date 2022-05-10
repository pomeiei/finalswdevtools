describe('unit_test', () => {
    beforeEach(() => {
        cy.intercept(
           {
             method: 'GET', 
             url: '/login/*',
           },
           [] 
         ).as('getUsers') 
      })
    it('add tag', () => {
      cy.visit('http://localhost:8080/editProfile')
      cy.get('.form-select').select(1)
      cy.get('.form-select').select(0)
      cy.get('.btn-danger').should('have.length', 2)
      
    })

    it('delete tag', () => {
      cy.get('.btn-danger').eq(0).click() 
      cy.get('.btn-danger').should('have.length',1)
      
    })
    
    it('add custom tag', () => {
      cy.get(':nth-child(13) > .form-control').type('body weight')
      cy.get('#button-addon2').click()
      cy.get('.btn-danger').should('have.length', 2)
      
    })
})