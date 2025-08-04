function exercicio05() {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));

    let html = `
        Soma: ${n1 + n2}<br>
        Subtração: ${n1 - n2}<br>
        Multiplicação: ${n1 * n2}<br>
        Divisão: ${n1 / n2}
    `;

    document.getElementById('resultado').innerHTML = html;
}
