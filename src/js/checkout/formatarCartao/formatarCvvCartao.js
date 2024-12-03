export async function formatarCvvCartao() {
    $("#input-cvv-cartao").on("input", function () {
      $("#input-cvv-cartao").mask("000");
    });
  }