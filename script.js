var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

function atualizarCarrinho() {
    var itensCarrinho = document.getElementById('itens-carrinho');
    var totalElement = document.getElementById('total');

    if (itensCarrinho && totalElement) {
        itensCarrinho.innerHTML = '';

        var total = 0;
        carrinho.forEach(function(item) {
            var itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = item.nome + ' - R$ ' + item.preco.toFixed(2);
            itensCarrinho.appendChild(itemCarrinho);
            total += item.preco;
        });

        totalElement.textContent = 'Total: R$ ' + total.toFixed(2);
    }
}
function finalizarCompra() {
    if (carrinho.length > 0) {
        alert("Compra finalizada com sucesso!");
        carrinho = [];
        localStorage.removeItem('carrinho');
        atualizarCarrinho();
    } else {
        alert("Seu carrinho está vazio.");
    }
}

document.addEventListener('DOMContentLoaded', atualizarCarrinho)