import { finalizarCompra } from "../finalizarCompra.js";
export function acionarPix() {
    var textoTempoPix = $("#tempo-pix");
    textoTempoPix.show()
    $('#texto-aviso').hide()
    $('#btn-copy').show()
    var contador = 15;

    const intervalo = setInterval(() => {
        $("#btn-prev").on("click", () => {
            contador = 15
            clearInterval(intervalo)
          });
      if (contador == 0) {
        clearInterval(intervalo);
        finalizarCompra()
      }
      textoTempoPix.html(contador);
      contador--;
    }, 1000);
  }
