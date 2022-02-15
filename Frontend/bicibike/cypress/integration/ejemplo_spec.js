describe('example to-do app', () => {
  
  
    it('displays two todo items by default', () => {
      
        cy.visit('http://localhost:3000/')
       
        cy.get('[href="/"]')
        .should('have.text', 'Home')

        cy.get('[href="/"]')
        .should('have.text', 'Homeless')

    })

     
  
});