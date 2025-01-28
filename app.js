//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        input.value = "";
        resultado.textContent = "";
    } else {
        alert("Por favor, digite um nome.");
    }

    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome, index) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    if (amigos.length > 1) {
        resultado.textContent = `O seu amigo secreto é: ${amigoSorteado}`;
    } else {
        resultado.textContent = "Nenhum amigo foi adicionado.";
    }
    amigos = [];
    atualizarLista();
}