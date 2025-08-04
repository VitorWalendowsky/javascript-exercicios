function exercicio09() {
    let qtd = parseInt(prompt("Quantas frutas deseja adicionar?"));
    let frutas = [];

    for (let i = 0; i < qtd; i++) {
        let fruta = prompt(`Digite a fruta ${i + 1}:`);
        frutas.push(fruta);
    }

    document.getElementById('resultado').innerHTML = "Lista de frutas: " + frutas.join(", ");
}
