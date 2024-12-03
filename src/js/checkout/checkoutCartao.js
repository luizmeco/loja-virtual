import { formatarNumeroCartao } from "./formatarCartao/formatarNumeroCartao.js";
import { formatarDataCartao } from "./formatarCartao/fomatarDataCartao.js";
import { formatarCvvCartao } from "./formatarCartao/formatarCvvCartao.js";

export async function checkoutCartao() {
  formatarNumeroCartao();
  formatarDataCartao();
  formatarCvvCartao();
}
