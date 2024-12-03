import { coletarDetalhes } from "./coletarDetalhes.js";
const apiUrl = "https://dummyjson.com/products";

$.get(apiUrl, async (dados) => {
  const produtos = dados.products;
  console.log(produtos);
  coletarDetalhes(produtos)

}).fail(function (error) {
  // Caso haja um erro na requisição
  console.error("Erro ao fazer a requisição:", error);
});
