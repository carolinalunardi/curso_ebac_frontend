//<reference types="cypress" />

describe('Teste para incluir contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve renderizar 3 contatos', () => {
        cy.get('.contato').should('have.length.at.least', 3)
    })

    it('Deve incluir 1 novo contato à lista', () => {
        cy.get('input[type="text"]').type('Maria Silva')
        cy.get('input[type="email"]').type('maria@email.com')
        cy.get('input[type="tel"]').type('11 912345678')
        cy.get('.adicionar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve editar o email de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('teste@email.com')
        cy.get('.alterar').click()
    })
})