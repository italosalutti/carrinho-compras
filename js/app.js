function adicionar(){
    /* 
    - recuperar valores - nome produto, quantidade, valor
    
    
    - atualizar valor total da compra
    */
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;

    //- calcular preço, subtotal
    let preco = quantidadeProduto * valorUnitario;

    //- adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
}

function limpar(){

}
