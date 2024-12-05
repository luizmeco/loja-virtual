import { checkoutCartao } from "./checkoutCartao.js";
import { acionarPix } from "./pix/acionarPix.js";
import { gerarPix } from "./pix/gerarPix.js";
import { copiarPix } from "./pix/copiarPix.js";

$(function () {
  
  $(".progress-bar").addClass("animate");

  $("#btn-cartao").on("click", () => {
    $(`#step-1`).hide();
    $(`.step-cartao`).show();
    $("#barra-progreso").css("width", "75%");
    $("#btn-prev").show();
    checkoutCartao();
  });

  $("#btn-pix").on("click", () => {
    $(`#step-1`).hide();
    $(`.step-pix`).show();
    $("#barra-progreso").css("width", "75%");
    $("#btn-prev").show();

    $("#barra-progreso").css("width", "75%");
  });

  $("#btn-prev").on("click", () => {
    $(`.step-pix`).hide();
    $(`.step-cartao`).hide();
    $('.step-final').hide()
    $('#btn-copy').hide()
    $('#tempo-pix').hide()
    $('#texto-aviso').show()
    $('#codigo-pix').html("")
    $(`#step-1`).show();
    $("#btn-prev").hide();
    $("#barra-progreso").css("width", "25%");
  });

  $('#btn-comprar-pix').on('click', ()=>{
    acionarPix()
    var codigoPix = gerarPix()
    $('#codigo-pix').html(codigoPix)
  })
  $('#btn-copy').on('click', ()=>{
    const texto = $("#codigo-pix").text();
    copiarPix(texto)
  })

  $("#btn-print").on('click', function () {
    const detalhes = $("#detalhes-compra").html()

    // Criar uma nova janela
    const janelaImpressao = window.open("", "_blank", "width=800, height=600");

    // Inserir o conteúdo na janela e chamar a impressão
    janelaImpressao.document.write(`
      <html>
        <head>
          <title>Imprimir Pedido</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { text-align: center; }
          </style>
        </head>
        <body>${detalhes}</body>
      </html>
    `);

    janelaImpressao.document.close(); // Necessário para alguns navegadores
    janelaImpressao.print();
    janelaImpressao.close();
  });
});
