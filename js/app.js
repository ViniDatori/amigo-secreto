// Lista de pessoas que participarão do amigo secreto:

let amigosIncluidos = [];
let amigosJaSorteados = [];

// Função para adicionar amigos ao sorteio:

function adicionar() {
    if (amigosIncluidos.length >= 20) {
        alert("Limite máximo de pessoas atingido!");
        return;
    } else {
        let amigo = document.getElementById("nome-amigo").value;
        amigosIncluidos.push(amigo);
        let listaAmigos = document.getElementById("lista-amigos");
        listaAmigos.innerHTML = amigosIncluidos.join(", ");
        document.getElementById("nome-amigo").value = "";
        return;
    }
}

// Função para sortear quem será o amigo secreto de quem:

function sortear() {
    if (amigosIncluidos.length < 2) {
        alert("Você precisa incluir pelo menos 2 pessoas na lista.");
        return;
    }

    // Nova lista cujos itens serão os mesmos da lista original, porém embaralhados com o algoritimo logo abaixo:
    amigosJaSorteados = [...amigosIncluidos];

    // Algoritmo de Fisher–Yates para embaralhar os nomes da lista original na nova lista:
    for (let posicaoAtual = amigosJaSorteados.length - 1; posicaoAtual > 0; posicaoAtual--) {
        // O loop começa no último índice (length - 1) e vai até o índice 0.
        // A cada iteração, fixamos o elemento da posição atual em seu lugar definitivo no embaralhamento.

        let posicaoAleatoria = Math.floor(Math.random() * (posicaoAtual + 1));
        // Escolhemos aleatoriamente uma posição (índice) entre 0 e posicaoAtual, inclusive.

        [amigosJaSorteados[posicaoAtual], amigosJaSorteados[posicaoAleatoria]] =
            [amigosJaSorteados[posicaoAleatoria], amigosJaSorteados[posicaoAtual]];
        // Trocamos o elemento da posição atual com o da posição sorteada.
        // Esse processo é repetido até a lista inteira estar embaralhada.
    }

    // Seleciona o elemento HTML onde os pares sorteados serão exibidos e limpa o conteúdo anterior:
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";

    // Formação dos pares (quem tirou quem) em ciclo fechado:
    for (let posicaoAtual = 0; posicaoAtual < amigosJaSorteados.length; posicaoAtual++) {
        let quem = amigosJaSorteados[posicaoAtual];
        // A pessoa na posição atual da lista (já embaralhada).

        let tirou = amigosJaSorteados[(posicaoAtual + 1) % amigosJaSorteados.length];
        // A pessoa seguinte na lista é o "amigo secreto" dela.
        // O operador % garante que a última pessoa tire a primeira, fechando o ciclo.

        listaSorteio.insertAdjacentHTML("beforeend", `${quem} -> ${tirou}<br>`);
    }

    // Desativa os botões "Adicionar" e "Sortear":
    document.getElementById("bt1").setAttribute("disabled", true);
    document.getElementById("bt1").style.cursor = "not-allowed";
    document.getElementById("bt2").setAttribute("disabled", true);
    document.getElementById("bt2").style.cursor = "not-allowed";

}

// Função para reiniciar:

function reiniciar() {
    amigosIncluidos = [];
    amigosJaSorteados = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    document.getElementById("bt1").removeAttribute("disabled");
    document.getElementById("bt1").style.cursor = "pointer";
    document.getElementById("bt2").removeAttribute("disabled");
    document.getElementById("bt2").style.cursor = "pointer";
    return;
}