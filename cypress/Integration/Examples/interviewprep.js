describe('ComputerEcommerce', function(){
    it('FirstTestCase', function(){
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('#main > h1').should('contain', '574 computers found')
        cy.get('#add').click()
        cy.get('#name').type('TestComputer')
        cy.get('#introduced').type('2016-03-12')
        cy.get('#discontinued').type('2018-03-12')
        cy.get('#company').select('IBM')
        cy.get('.primary').click()
        cy.get('.alert-message').should('contain', 'Done ! Computer TestComputer has been created')
        
    })
})