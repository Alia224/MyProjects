// http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx

Cypress.on("uncaught:exception", (err, runnable) => {
    return false
})
describe('Error message', () => {
    it('Error message', () => {

        cy.visit(`https://demoqa.com/radio-button`)

        cy.get(`#yesRadio`).then(($el) => {
            if ($el.is(`:enabled`)) {
              cy.log('Yes the Yes button is enabled')
                cy.get(`label[for="yesRadio"]`).click()
            } else { console.log(`The yes button is disabled`) }
}
)
        
cy.get(`#impressiveRadio`).then(($el) => {
            if ($el.is(`:enabled`)) {
               cy.log('Yes the impressive button is enabled')
                cy.get(`label[for="impressiveRadio"]`).click()
            } else { console.log(`The impressive button is disabled`) }

        })
        cy.get(`#noRadio`).then(($el) => {
            if ($el.is(`:enabled`)) {
               cy.log('Yes the no button is enabled')
                cy.get(`label[for="noRadio"]`).click()
            } else if($el.is(`:disabled`)){ cy.log(`The no button is disabled`) }

        })
    })
})
