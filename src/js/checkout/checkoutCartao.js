import { formatarNumeroCartao } from "./formatarCartao/formatarNumeroCartao.js";
import { formatarDataCartao } from "./formatarCartao/fomatarDataCartao.js";
import { formatarCvvCartao } from "./formatarCartao/formatarCvvCartao.js";
import { verificarValidadeCartao } from "./formatarCartao/checkValidadeCartao.js";
import { finalizarCompra } from "./finalizarCompra.js";

export async function checkoutCartao() {
  formatarNumeroCartao();
  formatarDataCartao();
  formatarCvvCartao();
  $("#btn-comprar").on("click", () => {
    const numeroCartao = $("#input-numero-cartao").val();
    const dataCartao = $("#input-data-cartao").val();
    const cvvCartao = $("#input-cvv-cartao").val();
    const nomeCartao = $("#input-nome-cartao").val();

    if (
      numeroCartao.length == 19 &&
      verificarValidadeCartao(dataCartao) &&
      cvvCartao.length == 3 &&
      nomeCartao != ""
    ) {
      finalizarCompra()
      console.log("tudo certo");
    } else {
      console.log("errado");
    }
  });
}
