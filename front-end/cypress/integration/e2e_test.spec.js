

describe('e2e test', () => {
    beforeEach(() => {
       localStorage.setItem("name", 'String')
       localStorage.setItem("id", '620739c23436e1d3be63c7aa')
     })
    
    it('Go to edit profile page', () => {
         cy.visit('https://exercise-commu-app123.herokuapp.com')
         cy.get('.nav-link').click()
         cy.get(':nth-child(1) > :nth-child(1) > .dropdown-item').click()
        //  cy.url().should('eq', 'http://localhost:8080/profile')
         cy.get('.edit_profile').click()
        //  cy.url().should('eq', 'http://localhost:8080/editProfile')
            
    })
    it('check tag appear', () => {
       cy.get('.btn-danger').should('have.length', 0)
    })
    it('add tag', () => {
        
        cy.get('.form-select').select(1)
        cy.get('.form-select').select(0)
        cy.get('.btn-danger').should('have.length', 2)
        cy.get('.btn-primary').click()
        
        
    })
    
    it('check tag are save?', () => {
        cy.get('.edit_profile').click()
        cy.get('.btn-danger').should('have.length', 2)
        cy.get('.router-link-active').click()
        cy.wait(1000)
    })
    it('check post or user', () => {
        cy.get('.col >').its('length').should('be.gte', 1)
       
    })

   })