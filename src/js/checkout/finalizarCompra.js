import { retornaProdutos } from "./api.js";
export function finalizarCompra() {
  const produtos = retornaProdutos();
  const urlParams = new URLSearchParams(window.location.search);

  // Pega o valor do parâmetro 'id'
  const idProduto = urlParams.get("id");

  // Exibe o valor do id
  const produto = produtos.find((p) => p.id == idProduto);
  var produtoHtml = `
  <div id="detalhes-compra" class="col-12 col-md-12 p-5">
                <span class="fs-4">Código de barras: ${produto.meta.barcode}</span>
                <h5 class="fs-1 mt-5">${produto.title}</h5>
                <div class="d-flex flex-column">
                  <span class="d-flex flex-column">
                    <span class="text-decoration-line-through fs-3">
                      R$ ${produto.price}
                    </span><br>
                    <span class="fs-1">
                      R$ ${(
                        produto.price -
                        produto.price * (produto.discountPercentage / 100)
                      ).toFixed(2)}
                    </span><br>
                    <span class="text-success fs-3">
                      ${produto.discountPercentage}% OFF
                    </span><br>
                    <span class="fs-3">
                      Frete: 30,00
                    </span><br>
                    <span class="fs-2">
                      Total do pedido: ${((produto.price - produto.price * (produto.discountPercentage / 100))+30).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
  `
  $('#div-final-compra').append(produtoHtml)
  $(`.step-pix`).hide();
  $(`.step-cartao`).hide();
  $('.step-final').show()
  $("#barra-progreso").css("width", "100%");
}
