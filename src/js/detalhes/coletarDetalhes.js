import { verificarLogin } from "./verificarLogin.js";
export async function coletarDetalhes(produtos) {
  // Captura a parte da URL após o '?'
  const urlParams = new URLSearchParams(window.location.search);

  // Pega o valor do parâmetro 'id'
  const idProduto = urlParams.get("id");

  // Exibe o valor do id
  const produto = produtos.find((p) => p.id == idProduto);

  const detalhesProdutoHtml = `
    <div class="card">
    <div class="row">
      <div class="card col-12 col-md-6">
        <!-- Carrossel -->
        <div
          id="productCarousel"
          class="carousel slide"
        >
          <!-- Slides -->
          <div id="images-carousel" class="carousel-inner text-center">
          </div>
  
          <!-- Controles de Navegação -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
          <i class="fa-solid fa-chevron-left fs-1 text-primary" aria-hidden="true"></i>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
          <i class="fa-solid fa-chevron-right fs-1 text-primary" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="card col-12 col-md-6 p-5">
        <span class="fs-4">Código de barras: ${produto.meta.barcode}</span>
        <h5 class="fs-1 mt-5">${produto.title}</h5>
        <div class="d-flex flex-column">
          <span class="fs-3">
            Avaliações: ${produto.rating}
            <i class="fa-solid fa-star"></i>
          </span>
          <span class="d-flex flex-column">
            <span class="text-decoration-line-through fs-3">
              R$ ${produto.price}
            </span>
            <span class="fs-1">
              R$ ${(
                produto.price -
                produto.price * (produto.discountPercentage / 100)
              ).toFixed(2)}
            </span>
            <span class="text-success fs-3">
              ${produto.discountPercentage}% OFF
            </span>
            <span class="fs-5 mt-5">${produto.description}</span>
            <span class="mt-5 fs-4 card text-center p-2">Ainda restam ${
              produto.stock
            } unidades</span>
            <button id="comprar" class="btn btn-primary">
                <div class="d-flex align-items-center justify-content-center gap-5">
                    <span class="fs-1">Comprar Agora!</span>
                <i class="fa-solid fa-cart-shopping fs-3"></i>
                </div>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
    `;
  $("#container-produto").append(detalhesProdutoHtml);
  const imagemProdutos = produto.images;
  if (produto.images.length > 1) {
    imagemProdutos.forEach((imagem, index) => {
      if (index == 0) {
        var imagemHtml = `
            <div class="carousel-item active">
              <img
                src="${imagem}"
              />
            </div>
        `;
      } else {
        var imagemHtml = `
            <div class="carousel-item">
              <img
                src="${imagem}"
              />
            </div>
        `;
      }
      $("#images-carousel").append(imagemHtml);
    });
  } else {
    var imagemHtml = `
            <div class="carousel-item active">
              <img
                src="${imagemProdutos}"
              />
            </div>
        `;
    $("#images-carousel").append(imagemHtml);
  }
  verificarLogin()
}
