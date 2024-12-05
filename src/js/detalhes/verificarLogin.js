export async function verificarLogin(produtos) {
  const urlParams = new URLSearchParams(window.location.search);

  // Pega o valor do parâmetro 'id'
  const idProduto = urlParams.get("id");

  // Exibe o valor do id
  const produto = produtos.find((p) => p.id == idProduto);

  $("#comprar").on("click", () => {
    if (localStorage.getItem("login") == "true") {
      window.location.href = `./checkout.html?id=${produto.id}`;
    } else {
      window.location.href = "./login.html";
    }
  });
}
