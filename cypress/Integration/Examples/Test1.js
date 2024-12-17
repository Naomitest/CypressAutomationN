describe('My first test', function()
{
it('My first test case', function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(4000)
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.brand').then(function(Logo)
    {
        cy.log(Logo.text())
    })
    cy.get('.brand').should('have.text', 'GREENKART')
})

})