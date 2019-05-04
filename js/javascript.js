let carrinho = []
let quantidadeCarrinho

function adicionarAoCarrinho(produto) {
    carrinho.push(produto)

    alert("Seu carrinho contém: " + carrinho.toString())
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    carregarCarrinho()
}

function carregarCarrinho() {
    carrinho = JSON.parse(localStorage.getItem("carrinho"))
    quantidadeCarrinho = carrinho.length
    document.getElementById("quantidadeCarrinho").innerHTML = quantidadeCarrinho
}