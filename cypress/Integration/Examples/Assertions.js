describe('Learning how to write assertions with checkboxes',function(){

it('Checkbox', function(){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')
})

it('Drop down for both dynamic and static assertions', function(){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('select').select('Option1').should('have.value','option1')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
})

//Note that cypress auto accepts pop ups. Cypress would click on OK by itself, but the text of the pop up can be validated
//cypress can trigger events to validate popup texts. It has nothing to do with cypress, it's a browser capability.
it('Alerts and Popups', function(){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
cy.on('window:alert', (str)=>
{
expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
})

})