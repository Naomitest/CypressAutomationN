describe('Yala Test suite', function(){
    it('SignUp Tests', function(){ 
        cy.visit('https://yalerite.staging.rank.africa/')
        cy.get('[type="email"]').type('master@yala.com')
        cy.get('[type="password"]').type('theS@meAsY0urs')
        cy.get('.rounded').click()
        cy.get('.justify-center > .flex-col > .flex > :nth-child(1)').type(0)
        //cy.get('.justify-center > .flex-col > .flex > :nth-child(2)').type(0)
        //cy.get('.justify-center > .flex-col > .flex > :nth-child(3)').type(0)
        //cy.get('.justify-center > .flex-col > .flex > :nth-child(4)').type(0)
        //cy.get('.flex > :nth-child(5)').type(0)
        //cy.get('.flex > :nth-child(6)').type(0)
        //cy.get('.rounded').click()
        
    })
})