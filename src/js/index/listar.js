
export async function listarProdutos(produtos) {
    var rowHtml = `<div class="row justify-content-around g-2">`;
    var contador = 0;

    await produtos.forEach((item, index) => {
      const cardHtml = `
            <a href="./src/pages/detalhes-produtos.html?id=${item.id}" class="produtos card col-4" style="width: 18rem">
                <img src="${item.thumbnail}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <div class="d-flex flex-column">
                    <span class="card-text">
                        Avaliações: 
                        ${item.rating}
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span class="d-flex flex-column">
                        <span class="text-decoration-line-through">
                            R$ ${item.price}
                        </span>
                         <span class="fs-4">
                            R$ ${(
                              item.price -
                              item.price * (item.discountPercentage / 100)
                            ).toFixed(2)}
                        </span>
                        <span class="text-success">
                            ${item.discountPercentage}% OFF
                        </span>
                    </span>
                  </div>
                </div>
            </a>
        `;
      rowHtml += cardHtml;
      contador++;

      if (contador == 4 || index == produtos.length - 1) {
        rowHtml += `</div>`;
        $("#container-produtos").append(rowHtml);
        rowHtml = `<div class="row mt-5 justify-content-around g-2">`;
        contador = 0;
      }
    });
  }

