// Lista de pessoas que participarão do amigo secreto (programar um limite de 20 pessoas):

let amigosIncluidos = [];
let participantes;

// Função para adicionar amigos ao sorteio:

function adicionar() {
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

        participantes = amigosIncluidos.length;

        while(participantes != 0) {
            
            // Sorteio das duplas (FALTA GARANTIR QUE A PESSOA NÃO CAIA COM ELA MESMA E NENHUMA DUPLA SEJA REPETIDA!)
            let pessoa1 = Math.floor(Math.random() * amigosIncluidos.length);
            let pessoa1Sorteada = amigosIncluidos[pessoa1];

            let pessoa2 = Math.floor(Math.random() * amigosIncluidos.length);
            let pessoa2Sorteada = amigosIncluidos[pessoa2];

            // Adição das duplas sorteadas na tela:
            let containerSorteados = document.getElementById("container-sorteados");
            let duplaSorteada = document.createElement("p");
            duplaSorteada.id = id;
            duplaSorteada.append(`${pessoa1Sorteada} -> ${pessoa2Sorteada}`);
            containerSorteados.appendChild(duplaSorteada);

            // Garantia que o loop terá fim:
            participantes--;
        }

    } else {
        alert("Você precisa incluir mais uma pessoa para realizar o sorteio.");
        return;
    }
}

// Função para reiniciar:

function reiniciar() {
    amigosIncluidos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("container-sorteados").innerHTML = "";
}