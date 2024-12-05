
const apiUrl = "https://dummyjson.com/products";

var produtos = ''

$.get(apiUrl, function (dados){
  produtos = dados.products;

}).fail(function (error) {
  // Caso haja um erro na requisição
  console.error("Erro ao fazer a requisição:", error);
});

export function retornaProdutos(){
  return produtos
}