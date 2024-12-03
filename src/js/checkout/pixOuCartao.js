import { checkoutCartao } from "./checkoutCartao.js";

$(function() {
    $('.progress-bar').addClass('animate');
  });


const divConteudoAnterior = $('#conteudo').html()
const divConteudo = $('#conteudo')



$('#btn-cartao').on('click', ()=>{
    const conteudoCartaoHtml = `
    <div>
          <div class="text-center">
            <span class="fs-2 mt-5 m-auto">Cartão de Crédito</span>
          </div>

          <label class="fs-4 mt-3" for="input-nome-cartao">Nome Cartão</label>
          <input
            id="input-nome-cartao"
            placeholder="Nome do Cartão"
            type="text"
            class="form-control bg-primary bg-opacity-50 m-auto mt-1"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <label class="fs-4 mt-3" for="input-numero-cartao"
            >Número Cartão</label
          >
          <input
            id="input-numero-cartao"
            placeholder="0000 0000 0000 0000"
            type="text"
            class="form-control bg-primary bg-opacity-50 m-auto mt-2"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <label class="fs-4 mt-3" for="input-data-cartao">Data Cartão</label>
          <input
            id="input-data-cartao"
            placeholder="00/00"
            type="text"
            class="form-control bg-primary bg-opacity-50 m-auto mt-2"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <label class="fs-4 mt-3" for="input-cvv-cartao">CVV</label>
          <input
            id="input-cvv-cartao"
            placeholder="000"
            type="text"
            class="form-control bg-primary bg-opacity-50 m-auto mt-2"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <div id="login-incorreto"></div>
          <div class="d-flex justify-content-center mt-5">
            <button class="btn btn-primary">
              <span class="fs-5 me-2">COMPRAR</span>
              <i class="fa-solid fa-gift fs-4"></i>
            </button>
          </div>
        </div>
    `
    $('#barra-progreso').css('width', '75%')
    divConteudo.html(conteudoCartaoHtml)
    checkoutCartao()
})

$('#btn-pix').on('click', ()=>{
    const conteudoPixHtml = `
    <div>
          <div class="text-center">
            <span class="fs-2 mt-5 m-auto">Pix copia e cola</span>
          </div>
          <div class="card text-center bg-success bg-opacity-50">
            <span id="tempo-pix" class="fs-1">10</span>
            <span class="fs-3">QR code</span>
            <span class="fs-3">Codigo Pix</span>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <button class="btn btn-primary">
              <span class="fs-5 me-2">COMPRAR</span>
              <i class="fa-solid fa-gift fs-4"></i>
            </button>
          </div>
        </div>
    `
    divConteudo.html(conteudoPixHtml)
    var textoTempoPix = $('#tempo-pix')
    var contador = 10

    const intervalo = setInterval(()=>{
        textoTempoPix.html(contador)
        contador--
        if(contador == 0){
            clearInterval(intervalo)
        }
    }, 1000)
    $('#barra-progreso').css('width', '75%')
})

