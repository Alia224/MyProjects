// Open chrome browser
//  Go to "http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx"
//  Login to the application
//  Verify customer "Susan McLaren" is present in the table
//  Click on customer details
//  Update customers last name and credit card info
//  Verify updated customers name and credit card number is displayed in table
//  Close browser

// describe(`LogIN`, () => it(`Login`, () => {
//     cy.visit(`http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx`)
//     cy.get(`#ctl00_MainContent_username`).type(`Tester`)
//     cy.get(`#ctl00_MainContent_password`).type(`test`)
//     cy.get(`#ctl00_MainContent_login_button`).click()
//     cy.get(`.SampleTable tbody tr`).each(($row, rowindex) => {
//         if (rowindex === 0) return;
//         cy.wrap($row).find(`td`).eq(1).invoke(`text`).then((text) => {
//             if (text.trim().includes(`Susan McLaren`)) {
//                 cy.log(`Yes the ${text} is in and its in the index-->${rowindex}`)
//                 cy.wrap($row).find(`td`).eq(12).click()
//                 cy.get(`#ctl00_MainContent_fmwOrder_txtName`)
//                     .clear().type(`Elio`)
//                 cy.get(`#ctl00_MainContent_fmwOrder_TextBox6`).clear().type(`566565565655656`)
//                 cy.get(`#ctl00_MainContent_fmwOrder_UpdateButton`).click()
//                 cy.wait(2000)
//                 cy.get(`#ctl00_MainContent_btnDelete`).should(`be.visible`)
//                 // // cy.get(`.SampleTable tbody tr`).each(($row)=>{
//                 // //      if (rowindex === 0) return;
//                 // //      cy.wrap($row).find(`td`).eq(1).invoke(`text`).then((text)=>{
//                 // //         if(text.trim().includes(`Elio`)){cy.log(`The update is done the new name is -->${text}`)}
//                 // //      })

//                 // })










//             }






//         })





//     })

// }))
describe('LogIN', () => {
  it('Login', () => {
    cy.visit('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx')
    cy.get('#ctl00_MainContent_username').type('Tester')
    cy.get('#ctl00_MainContent_password').type('test')
    cy.get('#ctl00_MainContent_login_button').click()

    // Find the row with Susan McLaren in column 2
    cy.get('.SampleTable tbody tr')
      .contains('td', 'Susan McLaren') // find the cell
      .parent('tr')                     // go to the row
      .within(() => {                   // scope actions to this row
        cy.get('td').eq(12).click()    // click the 13th column (edit)
      })

    // Now interact with inputs outside the table
    cy.get('#ctl00_MainContent_fmwOrder_txtName').clear().type('Elio')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').clear().type('566565565655656')
    cy.get('#ctl00_MainContent_fmwOrder_UpdateButton').click()

    cy.wait(2000)
    cy.get('#ctl00_MainContent_btnDelete').should('be.visible')

    // Optional: verify update
    cy.get('.SampleTable tbody tr')
      .contains('td', 'Elio')
      .should('exist')
      .then(() => {
        cy.log('The update is done, the new name is Elio')
      })
  })
})

