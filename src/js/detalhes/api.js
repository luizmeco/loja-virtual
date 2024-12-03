const apiUrl = "https://dummyjson.com/products";

$.get(apiUrl, async (dados) => {
  const produtos = dados.products;
  console.log(produtos);
  coletarDetalhes(produtos)

}).fail(function (error) {
  // Caso haja um erro na requisição
  console.error("Erro ao fazer a requisição:", error);
});

async function coletarDetalhes(produtos){
  // Captura a parte da URL após o '?'
  const urlParams = new URLSearchParams(window.location.search);

  // Pega o valor do parâmetro 'id'
  const idProduto = urlParams.get('id');

  // Exibe o valor do id
  const produto = produtos.find(p => p.id == idProduto)
  console.log(produto)

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
        <div class="carousel-inner text-center">
          <div class="carousel-item active">
            <img
              src="${produto.images}"
            />
          </div>
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
    <div class="card col-12 col-md-6">
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
            R$ ${( produto.price - produto.price * (produto.discountPercentage /
            100) ).toFixed(2)}
          </span>
          <span class="text-success fs-3">
            %${produto.discountPercentage} OFF
          </span>
          <span class="fs-5 mt-5">${produto.description}</span>
          <span class="mt-5 fs-4 card text-center p-2">Ainda restam ${produto.stock} unidades</span>
          <button class="btn btn-primary">
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
  `
  $("#container-produto").append(detalhesProdutoHtml);
}