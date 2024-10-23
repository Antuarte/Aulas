function calcularTempoTotal() {
    let totalMinutos = 0;
    let adicionarMais = true;

    while (adicionarMais) {
        let nomeMusica = prompt("Digite o nome da música:");
        let duracao = parseInt(prompt("Digite a duração da música em minutos:"), 10);

        if (!isNaN(duracao)) {
            totalMinutos += duracao;
        } else {
            alert("Por favor, insira uma duração válida.");
        }

        adicionarMais = confirm("Deseja adicionar mais músicas?");
    }

    let horas = Math.floor(totalMinutos / 60);
    let minutos = totalMinutos % 60;

    alert(`Tempo total de reprodução: ${totalMinutos} minutos (${horas} horas e ${minutos} minutos).`);
}

calcularTempoTotal();
