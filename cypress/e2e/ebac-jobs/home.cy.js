/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Adicionar contato', () => {
        cy.get('input[type="text"]').type('Arthur Henrique')
        cy.get('input[type="email"]').type('arthur@gmail.com')
        cy.get('input[type="tel"]').type('44 9999 9999')
        cy.get('.adicionar').click()
    })

    it('Editar contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type('Arthur Henrique2')
        cy.get('input[type="email"]').type('arthur2@gmail.com')
        cy.get('input[type="tel"]').type('44 9999 8888')
        cy.get('.alterar').click()
    })

    it('Remover contato', () => {
        cy.get('.delete').first().click()
    })
})