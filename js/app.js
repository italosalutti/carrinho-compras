function adicionar(){
    /* 
    - recuperar valores - nome produto, quantidade, valor
    - calcular preço, subtotal
    - adicionar ao carrinho
    - atualizar valor total da compra
    */
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('- R$')[1];
    let quantidadeProduto = document.getElementById('quantidade');
    let valorProduto = document.getElementById()
    let preco = quantidadeProduto.value * valorUnitario;
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidadeProduto.value);
    alert(preco);
}

function limpar(){

}
