

describe('e2e test', () => {
    // beforeEach(() => {
    //    localStorage.setItem("name", 'String')
    //    localStorage.setItem("id", '620739c23436e1d3be63c7aa')
    //  })
    
    it('login', () => {
         cy.visit('http://159.65.12.177:8888/')
         cy.get('.nav-link').click()
         cy.get(':nth-child(2) > :nth-child(1) > .dropdown-item').click()
         cy.get(':nth-child(1) > .form-control').type("jamew000")
         cy.get('.col > :nth-child(2) > .form-control').type("jamew000")
         cy.get('.col > .btn').click()
         cy.get('.col >').its('length').should('be.gte', 4)
        //  cy.get(':nth-child(1) > :nth-child(1) > .dropdown-item').click()
        //  cy.url().should('eq', 'http://localhost:8080/profile')
        //  cy.get('.edit_profile').click()
        //  cy.url().should('eq', 'http://localhost:8080/editProfile')
            
    })
    // it('check like count', () => {
    //     cy.get(':nth-child(1) > .card > .card-header > a').click()
    //     cy.get('#love > span').should(
    //         "have.text",
    //         "1"
    //       );
    // })
   })