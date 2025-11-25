import 'cypress-xpath';

describe(`using xpath`,()=>it(`using xpath`,()=>{

    cy.visit(`https://hrm.neotechacademy.com/auth/login`)
    cy.xpath(`//input[@id='txtUsername']`).type(`Admin`)
    cy.wait(2000)
    console.log(`Elio Cypress Login Page Loaded`)

}))