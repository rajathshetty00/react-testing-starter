describe("payment", () => {
  it("user can make payment", () => {
    cy.visit("http://localhost:3000");
    //login

    cy.findByRole("textbox", { name: /username/i }).type("johndoe");

    cy.findByLabelText(/password/i).type("s3cret");

    cy.findByRole("checkbox", { name: /remember me/i }).check();

    cy.findByRole("button", { name: /sign in/i }).click();

    // check a/c balance
    cy.get('[data-test="sidenav-user-balance"]').then((e) => console.log(e.text(), "old balance"));

    // click on new button
    cy.findByRole("button", { name: /new/i }).click();

    //search for a user

    cy.findByPlaceholderText(/search\.\.\./i).type("Devon Becker");

    cy.get('[data-test="user-list-item-tsHF6_D5oQ"]').click();

    //add amount and note and click pay button

    cy.findByPlaceholderText(/amount/i).type(9999);

    cy.findByPlaceholderText(/Add a note/i).type("Payment to friend");

    cy.findByRole("button", { name: /pay/i }).click();

    //return transaction

    cy.findByRole("button", { name: /return to transactions/i }).click();
  });
});
