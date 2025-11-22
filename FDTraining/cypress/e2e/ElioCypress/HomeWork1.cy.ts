


describe('open url', () => it('open url', () => {

    cy.visit("https://www.amazon.com/")
    cy.title().should(`eq`, `Amazon.com. Spend less. Smile more.`)
    cy.get('#nav-hamburger-menu').click()

}))