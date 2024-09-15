describe('My First Test', () => {
  // before(() => {
  //   cy.visit('/')
  //   cy.wait(1000)
  // })

    const games = [
      { value: 'megasena', name: 'Mega Sena' },
      { value: 'lotofacil', name: 'Loto Fácil' },
      { value: 'quina', name: 'Quina' },
      { value: 'lotomania', name: 'Lotomania' },
      { value: 'timemania', name: 'Timemania' }
    ]
  
    games.forEach(game => {
      it(`Selects ${game.name} and verifies the selection`, () => {
        cy.visit(`${game.value}`)
        cy.get('#select-game').select(game.value)
        cy.get('#select-game').should('have.value', game.value)
        cy.wait(1000)
  
        // Adicione verificações específicas para cada jogo, se necessário
        // Por exemplo, verificar se algum conteúdo da página muda
        // cy.contains('text related to selected game').should('be.visible')
      })
    }) 
  })
