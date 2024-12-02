import { listarProdutos } from "./listar.js";
const apiUrl = "https://dummyjson.com/products";

$.get(apiUrl, (dados) => {
  const produtos = dados.products;
  console.log(produtos);
  listarProdutos(produtos)

}).fail(function (error) {
  // Caso haja um erro na requisição
  console.error("Erro ao fazer a requisição:", error);
});