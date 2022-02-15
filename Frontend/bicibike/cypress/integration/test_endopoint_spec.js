describe('example to-do app', () => {
    
    before(() => {
        cy.visit('/api/stations/Poliesportiu/slots/')
      })
  
    it('displays two todo items by default', () => {
      
        cy.visit('/api/stations/')

    })

});