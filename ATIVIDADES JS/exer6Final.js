// Array para armazenar os nomes dos clientes
let clientes = [];

// Função para solicitar e armazenar os nomes dos clientes
function inserirNomes() {
    let nome = prompt("Insira o nome do cliente:");

    // Adiciona o nome ao array de clientes
    clientes.push(nome);

    // Pergunta ao usuário se deseja inserir mais nomes
    let continuar = confirm("Deseja inserir mais nomes?");

    // Se o usuário quiser continuar, chama recursivamente a função
    if (continuar) {
        inserirNomes();
    } else {
        // Quando o usuário decidir não inserir mais nomes, exibe todos os nomes de clientes, ou seja, quando ele apertar no CANCELAR.
        exibirNomes();
    }
}

// Função para exibir todos os nomes de clientes armazenados
function exibirNomes() {
    if (clientes.length > 0) {
        alert("Nomes dos clientes:\n" + clientes.join("\n"));
    } else {
        alert("Nenhum nome de cliente foi inserido.");
    }
}

// Chama a função para iniciar o programa
inserirNomes();
