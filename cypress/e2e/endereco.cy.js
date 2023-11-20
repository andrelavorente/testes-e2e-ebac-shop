/// <reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require("../fixtures/endereco.json");

describe("Funcionalidade Endereços - Faturamento e entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Deve fazer cadastro de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento(
      "Andre",
      "Lavorente",
      "Google",
      "Brasil",
      "Avenida Brasil",
      "3001",
      "São Paulo",
      "São Paulo",
      "01000100",
      "1828992332",
      "email@email.com"
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso"
    );
  });

  it.only("Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados", () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso"
    );
  });
});
