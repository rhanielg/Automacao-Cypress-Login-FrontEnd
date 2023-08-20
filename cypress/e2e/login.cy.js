/// <reference types="cypress">

describe('Tela de Login', () => {

    it('Login com sucesso', () => {
        cy.visit('/login')
        cy.viewport(1440,900)

        cy.get('input[id="user"]').type('rhanielgoncalves@gmail.com')
        cy.get('input[id="password"]').type('123456')
        cy.get('#btnLogin').click()
        

        cy.url().should('include', '/my-account')
     
    })

    it('Email inválido', () => {
        cy.visit('/login')
        cy.viewport(1440,900)

        cy.get('input[id="user"]').type('aaa')
        cy.get('input[id="password"]').type('123456')
        cy.get('#btnLogin').click()
       
        cy.get('span[class="invalid_input"]').should('have.text', 'E-mail inválido.')
     
    })

    it('Senha inválida', () => {
        cy.visit('/login')
        cy.viewport(1440,900)

        cy.get('input[id="user"]').type('rhanielgoncalves@gmail.com')
        cy.get('input[id="password"]').type('aaa')
        cy.get('#btnLogin').click()
       
        cy.get('span[class="invalid_input"]').should('have.text', 'Senha inválida.')
     
    })


})