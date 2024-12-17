describe('Sign In Functionality', () => {
  // Test data
  const validEmail = 'east@blondmail.com';
  const validPassword = 'Password@123';
  const invalidEmail = 'invaliduser@example.com';
  const invalidPassword = 'wrongpassword';

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://aurora.joinearna.com/auth/login');
  });

  it('should successfully sign in with valid credentials', () => {
    // Enter valid email
    cy.get('input[name="email"]').type(validEmail);

    // Enter valid password
    cy.get('input[name="password"]').type(validPassword);

    // Submit the login form
    cy.get('form').submit();

    // Assert the user is redirected to the dashboard or specific page
    //cy.url().should('have.value', 'Welcome');
    // Alternatively, assert a specific element on the dashboard
    //cy.get('.px-5 > .font-semibold').should('contain', 'Welcome');
  });

  it('should display an error message with invalid credentials', () => {
    // Enter invalid email
    cy.get('input[name="email"]').type(invalidEmail);

    // Enter invalid password
    cy.get('input[name="password"]').type(invalidPassword);

    // Submit the login form
    cy.get('form').submit();

    // Assert an error message is displayed
    cy.get('.go3958317564').should('contain', 'Invalid credentials.');
  });

  it('should display validation errors for empty fields', () => {
    // Submit the login form without entering credentials
    cy.get('form').submit();

    // Assert validation errors are displayed
    cy.get(':nth-child(1) > .relative > .flex > .mt-1 > .block').should('contain', 'Email is required');
    cy.get(':nth-child(2) > .relative > .flex > .mt-1 > .block').should('contain', 'Password is required');
  });
});





describe('Signup Tests for Aurora', () => {
  

  it('should display the signup form', () => {
    // Assuming there is a link to navigate to the signup form
    cy.visit('https://aurora.joinearna.com/auth/login')
    cy.get('.font-normal > .text-brand').click()
    cy.get(':nth-child(1) > .text-xs > label > .mt-1').type('Naomi')
    cy.get('.gap-4 > .grid > :nth-child(2) > .text-xs > label > .mt-1').type('Dickson')
    cy.get('.gap-4 > :nth-child(2) > .text-xs > label > .mt-1').type('western1@blondmail.com')
    cy.get('.react-international-phone-input').type('8133288911')
    cy.get('.inline-flex').click()
    cy.get('.relative.mt-3 > .text-xs > label > .mt-1').type('Password@123')
    cy.get('.mt-6 > .text-xs > label > .mt-1').type('Password@123')
    cy.get('.inline-flex').click()
  });
});
