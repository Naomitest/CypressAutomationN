describe('Test suite', function(){
    it('Testcase', function(){
        cy.visit("https://www.saucedemo.com")
        cy.get("#user-name").type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("#login-button").click()
    })
})