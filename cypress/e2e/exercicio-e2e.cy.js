/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/");
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {});

  it("Deve fazer o cadastro", () => {
    cy.get(".icon-user-unfollow").click();
    let emailFaker2 = faker.internet.email();

    cy.preCadastro(emailFaker2, "senha!@forte", "Andre", "Lavorente");
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });
  describe("Funcionalidade página de produtos", () => {
    it("Deve selecionar um produto da lista", () => {
      cy.get('[class="product-block grid"]')
        .contains("Zeppelin Yoga Pant")
        .click();
    });

    it("Deve adicionar um produto ao carrinho", () => {
      let quantidade = 4;

      cy.get('[class="product-block grid"]')
        .contains("Zeppelin Yoga Pant")
        .click();

      ////

      cy.get(".button-variable-item-34").click();
      cy.get(".button-variable-item-Green").click();
      cy.get(".input-text").clear().type(quantidade);
      cy.get(".single_add_to_cart_button").click();

      cy.get(".woocommerce-message > .button").click();
      cy.get(".checkout-button").click();
      cy.get(".showlogin").click();
      cy.get("#username").type("aluno_ebac@teste.com");
      cy.get("#password").type("teste@teste.com");
      cy.get(".woocommerce-button").click();
      cy.get("#payment_method_cod").click();
      cy.get("#terms").click();
      cy.get("#place_order").click();
    });
  });
});
