export function verificarValidadeCartao(dataValidade) {
    const [mes, ano] = dataValidade.split('/').map(Number);
    const anoCompleto = 2000 + ano;
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
  
    return anoCompleto > anoAtual || (anoCompleto === anoAtual && mes >= mesAtual);
  }