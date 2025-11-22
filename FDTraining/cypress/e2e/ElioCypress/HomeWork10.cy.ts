

// Go to https://hrm.neotechacademy.com/
// Log in using our custom methods
// Go to PIM menu
// Add an employee
// Go to Employee List
// Get the list of the employees (Using tables - tr and td) 
// Loop to search for the employee you added
// When you find the employee - click on it.
// Take a screenshot
describe(`Add employee`, () => it(`Add employee`, () => {
    cy.visit(`https://hrm.neotechacademy.com/auth/login`)
    cy.get(`#txtUsername`).clear().type(`Admin`)
    cy.get(`#txtPassword`).clear().type(`Neotech@123`)
    cy.get(`button[type='submit']`).click()
    cy.wait(2000)
    cy.contains(`span`, `PIM`).click()
    cy.wait(1000)
    cy.get(`span[combinedmenutitle='PIM > Add Employee']`).click()
    cy.wait(10000)
    cy.get(`#first-name-box`).type(`Paul`)
    cy.get(`#middle-name-box`).type(`Toubia`)
    cy.get(`#last-name-box`).type(`Azar`)
    cy.get(`.filter-option-inner-inner`).click()
    cy.get(`ul.dropdown-menu.inner.show li`).each(($el) => {
        const location = $el.text().trim()
        if (location.includes(`France Regional HQ`)) {
            cy.wrap($el).click()
        } else { cy.log(`There is no this location`) }


    })
    // cy.get(`#location`).select(`Canadian Regional HQ`)
    cy.get(`#modal-save-button`).click()
    cy.wait(10000)
    cy.get(`body > div:nth-child(3) > div:nth-child(1) 
        > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > div:nth-child(2) > ui-view:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > materializecss-decorator:nth-child(3) > div:nth-child(1) > 
        sf-decorator:nth-child(1) > div:nth-child(1) >
         span:nth-child(3) > span:nth-child(1) > i:nth-child(3)`).click()
    //        cy.get('select.picker__select--month').first()
    //   .invoke('val', '2') // 0=Jan, 1=Feb, 2=Mar, etc.
    //   .trigger('change')
    // cy.get(`.select-wrapper picker__select--month`).click()
    // cy.get(`picker__calendar-container`).find(`select-wrapper picker__select--month`).contains(`span`, `caret`)
    cy.get('.picker--opened input.select-dropdown').first()
        .click({ force: true })
    cy.get(`ul.select-dropdown li span`).each(($el) => {
        const date = $el.text().trim()
        if (date.includes(`February`)) {
            cy.wrap($el).click()
        }
    })


    // cy.get(`.picker__select--year initialized`).select(`1999`)
    // cy.get(`.picker__table tbody tr`).each(($row, rowindex) => {
    //     cy.wrap($row).find(`td`).contains(`2`).parent().click(), { force: true }




    // })
    // cy.get(`.picker__table tbody tr td`).contains(`2`).click(),{force:true}
    cy.contains(`.picker__table tbody tr td`, /^2$/).click()
    // cy.screenshot()
    //   cy.get('.picker__table tbody tr').filter(':contains("2")')
    //   .first().find('td').contains('2').click({ force: true })


    cy.get(`span[combinedmenutitle='PIM > Employee List']`).click()
    cy.wait(3000)
    cy.get('#employeeListTable tbody tr').each(($row, rowIndex) => {
        const cellText = $row.find('td').eq(2).text().trim()
        if (cellText === 'Paul Toubia Azar') {
            cy.log(`✅ Found 'Paul' in row ${rowIndex}: ${cellText}`)
        } else { cy.log(`it didnt find paul in row ${rowIndex}: ${cellText}`) }
    })





}))