// Lista de pessoas que participarão do amigo secreto:

let amigosIncluidos = [];
let amigosJaSorteados = [];
let participantes;

// Função para adicionar amigos ao sorteio:

function adicionar() {
    
    if(amigosIncluidos.length > 20) {
        alert("Limite máximo de pessoas atingido!");
        return;
    } else {
        let amigo = document.getElementById("nome-amigo").value;
        amigosIncluidos.push(amigo);
        let listaAmigos = document.getElementById("lista-amigos");
        listaAmigos.textContent = `${amigosIncluidos}`;
        document.getElementById("nome-amigo").value = "";
    }
}

// Função para sortear quem será o amigo secreto de quem:

function sortear() {

    if (amigosIncluidos.length < 2) {
        alert("Você precisa incluir pelo menos 2 pessoas na lista.");
        return;
    }

    // Caso o número de participantes seja par, "embaralhamos os nomes" aleatoriamente em uma nova lista:

    else if(amigosIncluidos.length % 2 == 0) {
        participantes = amigosIncluidos.length;
        while(participantes != 0) {
            let amigoAleatorio = amigosIncluidos[Math.floor(Math.random() * amigosIncluidos.length)];
            if(amigosJaSorteados.includes(amigoAleatorio)) {
                amigoAleatorio = "";
                amigoAleatorio = amigosIncluidos[Math.floor(Math.random() * amigosIncluidos.length)];
            } else {
                amigosJaSorteados.push(amigoAleatorio);
                participantes--;
            }
        }

        // Após embaralhar, montamos os pares, ou seja, quem tirou quem:
        // FALTA AGORA MOSTRAR ESSES PARES NA TELA PARA O USUÁRIO MANIPULANDO A LINHA 50 DO HTML:

        while(amigosJaSorteados.length != 0) {
            console.log(`${amigosJaSorteados[amigosJaSorteados.length - 1]} -> ${amigosJaSorteados[amigosJaSorteados.length - 2]}`);
            amigosJaSorteados.pop(amigosJaSorteados[amigosJaSorteados.length - 1]);
            amigosJaSorteados.pop(amigosJaSorteados[amigosJaSorteados.length - 2]);
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
}