// Lista de pessoas que participarão do amigo secreto:

let amigosIncluidos = [];

// Função para adicionar amigos ao sorteio:

function adicionar() {
    // programar um limite de 20 pessoas
    let amigo = document.getElementById("nome-amigo").value;
    amigosIncluidos.push(amigo);
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.textContent = `${amigosIncluidos}`;
    document.getElementById("nome-amigo").value = "";
}

// Função para sortear quem será o amigo secreto de quem:

function sortear(id) {

    if (amigosIncluidos.length < 2) {
        alert("Você precisa incluir pelo menos 2 pessoas na lista.");
        return;
    }

    else if(amigosIncluidos.length % 2 == 0) {

    } else {
        alert("Você precisa incluir mais uma pessoa para realizar o sorteio.");
        return;
    }
}

// Função para reiniciar:

function reiniciar() {
    amigosIncluidos = [];
    document.getElementById("lista-amigos").textContent = "";
}