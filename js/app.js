// Declaração de lista e variáveis:

let amigosIncluidos = [];

// Função para adicionar amigos ao jogo:

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    amigosIncluidos.push(amigo);
    
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.textContent = `${amigosIncluidos}`;

    document.getElementById("nome-amigo").value = "";
}