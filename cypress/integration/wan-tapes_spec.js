describe("home page", () => {
  it("Navigates to Hot Tap page", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Listen...").click();

    cy.url().should("include", "/releases/hot-tap");
  });
});
