// Open chrome browser
// Go to "http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx"
// Enter valid username
// Clear username and enter again valid username
// Leave password field empty
// Click on login button
// Verify error message with text "Invalid Login or Password." is displayed.

describe(`testing`, () => it(`testing`, () => {

    cy.visit(`http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx`)
    cy.get(`input[type="text"]`).type(`Elio`)
    // cy.get(`input[type="password"]`).type(`Azar`)
    cy.get('.button').click()
    cy.get(`.error`).should('have.text', 'Invalid Login or Password.')






}))