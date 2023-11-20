/// <reference types="cypress" />

describe("Funcionalidade página de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });

  it("Deve adicionar produtos ao carrinho - Usando comando customizado", () => {
    cy.addProdutos("Geo Insulated Jogging Pant", "36", "Red", 4);
    cy.get(".woocommerce-message > .button").click();
    cy.get(".checkout-button").click();
  });
});
