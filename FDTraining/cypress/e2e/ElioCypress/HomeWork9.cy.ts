// Homework: American Airlines Flight Search

// Open chrome browser
// Go to https://www.aa.com/homePage.do
// Enter From and To
// Select departure as December 14 of 2024
// Select arrival as December 22 of 2024
// Click on search
// Close browser
describe(`Go to airlines ,select from December 14 of 2024 to  December 22 of 2024`,()=>
    it(`Go to airlines ,select from December 14 of 2024 to  December 22 of 2024`,()=>{

cy.visit('http://www.aa.com/homePage.do?locale=en_US', { failOnStatusCode: false })

cy.get(`.ui-datepicker-trigger`).click()
cy.get(`.ui-datepicker-calendar tbody`).each(($row,rowindex)=>{

cy.wrap($row).find(`tr`).contains(`a`,`13`).click()




})




    }))