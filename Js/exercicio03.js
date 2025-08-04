function exercicio03() {
    let personagem1 = {
        nome: "Viktor",
        raca: "Humano Aprimorado",
        skill: "Hex Core",
        pais: "Zaun",
        rota: "Meio"
    };

    let personagem2 = {
        nome: "Braum",
        raca: "Humano",
        skill: "Unbreakable",
        pais: "Freljord",
        rota: "Suporte"
    };

    let personagem3 = {
        nome: "Mordekaiser",
        raca: "Espírito Reencarnado",
        skill: "Realm of Death",
        pais: "Noxus",
        rota: "Topo"
    };

    let html = `
        <strong>${personagem1.nome}</strong> - Raça: ${personagem1.raca} - Skill: ${personagem1.skill} - País: ${personagem1.pais} - Rota: ${personagem1.rota}<br>
        <strong>${personagem2.nome}</strong> - Raça: ${personagem2.raca} - Skill: ${personagem2.skill} - País: ${personagem2.pais} - Rota: ${personagem2.rota}<br>
        <strong>${personagem3.nome}</strong> - Raça: ${personagem3.raca} - Skill: ${personagem3.skill} - País: ${personagem3.pais} - Rota: ${personagem3.rota}
    `;

    document.getElementById('resultado').innerHTML = html;
}
