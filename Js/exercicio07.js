function exercicio07() {
    let nota = parseFloat(prompt("Digite a nota do aluno:"));
    let resultado;

    if (nota >= 7) {
        resultado = "Aprovado";
    } else if (nota >= 5) {
        resultado = "Recuperação";
    } else {
        resultado = "Reprovado";
    }

    document.getElementById('resultado').innerHTML = resultado;
}
