function exercicio06() {
    let pm = prompt("Modelo da Placa Mãe:");
    let pmPreco = parseFloat(prompt("Preço da Placa Mãe:"));
    let pv = prompt("Modelo da Placa de Vídeo:");
    let pvPreco = parseFloat(prompt("Preço da Placa de Vídeo:"));
    let proc = prompt("Modelo do Processador:");
    let procPreco = parseFloat(prompt("Preço do Processador:"));
    let mem = prompt("Modelo da Memória RAM:");
    let memPreco = parseFloat(prompt("Preço da Memória RAM:"));
    let fonte = prompt("Modelo da Fonte:");
    let fontePreco = parseFloat(prompt("Preço da Fonte:"));

    let total = pmPreco + pvPreco + procPreco + memPreco + fontePreco;

    document.getElementById('resultado').innerHTML = `
        <strong>Configuração do PC:</strong><br>
        Placa Mãe: ${pm} - R$${pmPreco}<br>
        Placa de Vídeo: ${pv} - R$${pvPreco}<br>
        Processador: ${proc} - R$${procPreco}<br>
        Memória RAM: ${mem} - R$${memPreco}<br>
        Fonte: ${fonte} - R$${fontePreco}<br>
        <strong>Total: R$${total}</strong>
    `;
}
