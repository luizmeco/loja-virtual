export async function formatarNumeroCartao() {
    $("#input-numero-cartao").on("input", function () {
    $("#input-numero-cartao").mask("0000 0000 0000 0000");
  });
}
