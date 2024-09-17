let carrinho = [];
let totalGeral = 0;


function adicionar() {
    // Pegar o produto e a quantidade do formulário
    const produtoSelecionado = document.getElementById('produto').value;
    const quantidadeSelecionada = parseInt(document.getElementById('quantidade').value);

    if (quantidadeSelecionada <= 0 || isNaN(quantidadeSelecionada)) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    // Separar o nome do produto e o preço
    const [nomeProduto, precoProduto] = produtoSelecionado.split(' - R$');
    const preco = parseFloat(precoProduto);

    // Verifica se o item já está no carrinho
    const itemExistente = carrinho.find(item => item.nome === nomeProduto);

    if (itemExistente) {
        // Se o item já existir, soma a quantidade
        itemExistente.quantidade += quantidadeSelecionada;
    } else {
        // Se não existir, adiciona um novo item ao carrinho
        carrinho.push({
            nome: nomeProduto,
            preco: preco,
            quantidade: quantidadeSelecionada
        });
    }

    atualizarCarrinho();
}

function limpar() {
    carrinho = [];
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').textContent = "R$0.00";
    alert("Carrinho limpo!");
}

function atualizarCarrinho() {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';  // Limpa a lista de produtos

    totalGeral = 0;

    carrinho.forEach(item => {
        // Atualiza o total geral
        totalGeral += item.preco * item.quantidade;

        // Cria o elemento para mostrar o produto no HTML
        const produtoCarrinho = document.createElement('section');
        produtoCarrinho.classList.add('carrinho__produtos__produto');
        produtoCarrinho.innerHTML = `<span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${(item.preco * item.quantidade).toFixed(2)}</span>`;
        listaProdutos.appendChild(produtoCarrinho);
    });

    // Atualiza o total no HTML
    document.getElementById('valor-total').textContent = `R$${totalGeral.toFixed(2)}`;
}
