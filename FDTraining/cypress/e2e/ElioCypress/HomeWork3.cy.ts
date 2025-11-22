// Open chrome browser
// Go to "https://demo.guru99.com/test/newtours/"
// Click on Register Link
// Fill out ALL required info
// Click Submit
// User successfully registered
// (Create the script using different locators)

it(`Fill the fields`, () => {

    cy.visit(`https://demo.guru99.com/test/newtours/`)
    cy.get('td.mouseOut').eq(1).find('a[href="register.php"]').contains('REGISTER').click()
    cy.get(`input[name='firstName']`).type(`Elio`)
    cy.get(`input[name='lastName']`).type(`Azar`)
    cy.get(`input[name='phone']`).type(`70552346`)
    cy.get(` input[id='userName'] `).type(`azar@gamil.com`)
    cy.get(`input[name='address1']`).type(`Aintoura el maten`)
    cy.get(`input[name='city']`).type(`maten`)
    cy.get(`input[name='state']`).type(`jabal loubnan`)
    cy.get(`input[name='postalCode']`).type(`0000`)
    cy.get(`select[name='country']`).select(`ALBANIA`)
    cy.get(`input[name='email']`).type(`azar@gamil.com`)
    cy.get(`input[name='password']`).type(`azarrrr`)
    cy.get(`input[name='confirmPassword']`).type(`azarrrr`)
    cy.get(`input[name='submit']`).click()



})
