export async function formatarDataCartao() {
  $("#input-data-cartao").on("input", function () {
    $("#input-data-cartao").mask("00/00");
  });
}
