// Launch the browser and open the site "https://neotech.vercel.app/iframe/multi2"
// 2) Verify on the page header "Not a Friendly Topic" displayed
// 3) Click on the Inner Frame Check box
// 4) Choose Dog from Animals dropdown
// 5) Quit the browser

// describe(`Using Frame`, () => it(`Using Frame`, () => {
//     cy.visit(`https://neotech.vercel.app/iframe/multi2`)
//     cy.get(`span`).should(`has.text`, `Not a Friendly Topic`).should(`be.visible`)
//     // Step 1: get outer iframe
//     cy.get('#nested1')
//         .its('0.contentDocument.body')
//         .should('not.be.empty')
//         .then(cy.wrap)
//         // Step 2: get inner iframe inside the outer iframe
//         .find('#child-frame')
//         .its('0.contentDocument.body')
//         .should('not.be.empty')
//         .then(cy.wrap)
//         // Step 3: finally click the checkbox inside the inner iframe
//         .find('#inner-frame-check-box')
//         .click()
//         cy.wait(2000)

//     cy.get(`#animals`).its(`0.contentDocument.body`)
//     .should(`not.be.empty`)
//     .then(cy.wrap)
//     .find(`#animal-select`)
//     .select(`dog`)


// })



// )

describe(`HomeWork`, () => it(`homework`, () => {
    cy.visit(`https://hrm.neotechacademy.com/auth/login`)
    cy.get(`#txtUsername`).type(`Admin`)
    cy.get(`#txtPassword`).type(`Neotech@123`)
    cy.get(`button[type='submit']`).click()
    cy.contains('span', 'PIM').click()
    cy.get(`#menu_pim_addEmployee`).click()





}))