describe("Home page test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Title contains correct text", () => {
    cy.get('[data-test="hero-heading"]').contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("Features contain correct text", () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })

  it("Course title test", () => {
    cy.getByData("course-title").should("have.length", 3)
  })
})

// Selektory:
// .item - třída(class)
// #item - id
// [data="string"] - vlastnost
// h1 - element
