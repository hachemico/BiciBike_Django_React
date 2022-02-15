describe('example to-do app', () => {
  
  
    it('displays two todo items by default', () => {
      
        cy.visit('http://localhost:3000/')
       
        cy.get('[href="/login"]').click()
        
        cy.get('#formBasicEmail')
        .type('hachemico@gmail.com')
     
        cy.get('#formBasicPassword')
        .type('hache1234')

        cy.get('.btn').click()
    
        cy.get('.navbar-nav > :nth-child(3)')
        .should('have.text', 'Logout')

    })

     
  
});