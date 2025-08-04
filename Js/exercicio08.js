function exercicio08() {
    let limite = parseInt(prompt("Digite até qual número contar:"));
    let contador = 1;
    let texto = "";

    while (contador <= limite) {
        texto += `Contando: ${contador}<br>`;
        contador++;
    }

    document.getElementById('resultado').innerHTML = texto;
}
