function exercicio04() {
    let nome = prompt("Digite o nome:");
    let peso = parseFloat(prompt("Digite o peso (kg):"));
    let altura = parseFloat(prompt("Digite a altura (m):"));
    let imc = peso / (altura * altura);

    document.getElementById('resultado').innerHTML = `O IMC de ${nome} é: ${imc.toFixed(2)}`;
}
