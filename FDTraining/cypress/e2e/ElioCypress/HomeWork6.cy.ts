// Orange HRM Application Login:
// Open Chrome browser
// Go to https://hrm.neotechacademy.com/
// Enter valid username and password
// Click on login button
// Then verify that "span with id account-name" has the text "Jacqueline White".
// Quit the browser




// describe(`Orange HRM Application Login:`, () => it(`Orange HRM Application Login:`, () => {

//     cy.visit("https://hrm.neotechacademy.com/auth/login")
//     cy.get(`#txtUsername`).type(`Admin`)
//     cy.get(`#txtPassword`).type(`Neotech@123`)
//     cy.get(`div[class="visibility-holder"]`).click()
//     cy.get(`button[type="submit"]`).click()
//     // cy.get(`#txtPassword-error`).should('be.visible').should(`have.text`,`Password cannot be empty`)
//     cy.get(`#account-name`).should(`have.text`, `Jacqueline White`)

// }))
//  Amazon Department List Verification
//         Open chrome browser
//         Go to "http://amazon.com/"
//         Verify how many department options available.
//         Print each department
//         Select Computers
//         Quit browser

// it(`Amazon Department List Verification`, () => {
//     cy.visit(`https://www.amazon.com/ref=cs_503_link`)
//     cy.get('#searchDropdownBox option').then(options => {

//         cy.log(`The number of deparments are --->${options.length.toString()}`)

//         options.each((index, Option) => {
//             cy.log(`the department with the index ${index} is ->${Option.textContent} `)
//         })

//         cy.get(`#searchDropdownBox`).select(`Computers`,{force:true})




//     })


// })

//   Alert text verification
//         Open chrome browser
//         Go to https://demoqa.com/
//         Click on "Alerts, Frame & Windows" link
//         Click on "Alerts" links on the left side
//         Click on button to see Alert
//         Verify alert box with text "You clicked a button" is present
//         Click on 3rd button in the page
//         Verify alert box with text "Do you confirm action?" is present and click "confirm"
//         Click on 4 th button in the page and enter your name and click ok.
//         Quit browser
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

it(`Alert text verification`, () => {
    cy.visit(`https://demoqa.com/`)
    cy.contains('h5', 'Alerts, Frame & Windows').click()
    cy.contains(`Alerts, Frame & Windows`).click()
    cy.contains('li', /alerts/i).click({ force: true })


    cy.wait(2000)
    cy.contains(`span`, `Click Button to see alert `).should(`is.visible`).should(`have.text`, `Click Button to see alert `)
    cy.wait(2000)
    cy.get(`#confirmButton`).click()
    cy.on(`window:confirm`, (text) => {
        expect(text).to.equal(`Do you confirm action?`)
        return false;
    })
    
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Elio'); // 'Elio' is the text we "type"
    });
    cy.get(`#promtButton`).click()



})