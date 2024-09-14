describe('My First Test', () => {
  before(() => {
    cy.visit('https://sorteios-loterias.vercel.app')
    cy.wait(3000)
  })

    const games = [
      { value: '/', name: 'Sorteios' },
      { value: 'megasena', name: 'Mega Sena' },
      { value: 'lotofacil', name: 'Loto Fácil' },
      { value: 'quina', name: 'Quina' },
      { value: 'lotomania', name: 'Lotomania' },
      { value: 'timemania', name: 'Timemania' }
    ]
  
    games.forEach(game => {
      it(`Selects ${game.name} and verifies the selection`, () => {
        cy.visit('https://sorteios-loterias.vercel.app')
        cy.get('#select-game').select(game.value)
        cy.get('#select-game').should('have.value', game.value)
  
        // Adicione verificações específicas para cada jogo, se necessário
        // Por exemplo, verificar se algum conteúdo da página muda
        // cy.contains('text related to selected game').should('be.visible')
      })
    }) 
  })
