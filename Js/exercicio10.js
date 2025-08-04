function exercicio10() {
    let limite = parseInt(prompt("Digite até qual número deseja contar:"));
    let texto = "";

    for (let i = 1; i <= limite; i++) {
        texto += `Número ${i}<br>`;
    }

    document.getElementById('resultado').innerHTML = texto;
}
