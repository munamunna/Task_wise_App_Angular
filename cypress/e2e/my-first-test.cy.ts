describe('my first test',()=>{
    it('open the welcome page',()=>{
        cy.visit('http://localhost:63862/users')
    })
})

describe('User Registration', () => {
    it('Submit registration form and verify successful registration', () => {
      // Visit the registration page
      cy.visit('http://localhost:63862/users');
  
      // Fill out the registration form
      cy.get('[formControlName=username]').type('sa');
      cy.get('[formControlName=email]').type('sa@gmail.com.com');
      cy.get('[formControlName=password]').type('password@123');
  
      // Submit the form
      cy.get('form').submit();
  
      
    });
  });
  