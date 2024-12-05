export function gerarPix() {
    // Gera um ID de transação aleatório
    const idTransacao = Math.random().toString(36).substring(2, 15).toUpperCase();
  
    // Dados fictícios do Pix
    const chavePix = "CHAVEPIX@EMAIL.COM";
    const nomeRecebedor = "NOME DO RECEBEDOR";
    const cidade = "CIDADE";
    const valor = (Math.random() * 1000).toFixed(2); // Valor aleatório entre 0 e 1000
    
    // Construindo o código Pix (simulação)
    const pixCode = `
  000201
  010212
  26360014BR.GOV.BCB.PIX
  0014${chavePix}
  52040000
  5303986
  5802BR
  5909${nomeRecebedor.substring(0, 9).toUpperCase()}
  6008${cidade.substring(0, 8).toUpperCase()}
  62070503***${idTransacao}
  6304
    `.replace(/\s+/g, ""); // Remove espaços extras para simular o formato Pix
  
    return pixCode;
  }