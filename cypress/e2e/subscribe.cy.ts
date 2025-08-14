describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("email@seznam.cz")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("email@seznam.cz")
  })

  it("does NOT allow users to subscribe with bad email", () => {
    cy.getByData("email-input").type("email")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
    cy.getByData("email-input").then(($input?: JQuery<HTMLInputElement>) => {
      expect($input[0].validationMessage).not.empty
    })
  })

  it("does NOT allow users to subscribe to the email list twice", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData(" server-error-message")
      .should("exist")
      .contains("john@example.com")
  })
})
