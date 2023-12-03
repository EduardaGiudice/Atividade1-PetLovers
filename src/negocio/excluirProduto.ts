import Produto from "../modelo/produto";

export default class ExcluirProduto {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
    }

    public excluir(produtoAlvo: Produto) {
        this.produtos.forEach(produto => {
            if (produto.nome === produtoAlvo.nome) {
                let indice = this.produtos.indexOf(produto)
                delete this.produtos[indice]
            }
        })
    }
}