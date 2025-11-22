// TC 1: Orange HRM blank password validation
// 1. Go to https://hrm.neotechacademy.com/
// 2. Enter valid username and leave password field empty
// 3. Click on login button
// 4. Verify error message with text "Password cannot be empty" is displayed
// import 'cypress-xpath';
describe(`Verify Error message`, () => it(`Verify Error message`, () => {

    cy.visit(`https://hrm.neotechacademy.com/auth/login`)
    cy.get(`#txtUsername`).clear().type(`Admin`)
    cy.get(`#txtPassword`).clear().type(`Neotech$123`)
    cy.get(`button[type='submit']`).click()
    cy.wait(2000)
    // cy.get(`#txtPassword-error`).should(`have.text`,`Password cannot be empty`)
    cy.get(`.toast-message`).should(`be.visible`).contains(`Invalid Credentials`)



})






)