import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class AtualizarProduto{
        private entrada: Entrada
        private produtos: Array<Produto>

        constructor(produtos: Array<Produto>) {
            this.produtos = produtos
            this.entrada = new Entrada()
        }

        public atualizar(produtoAlvo: Produto, novoProduto: string, valorNovoProduto: number) {
            this.produtos.forEach((produto, indice) => {
                if (produto.nome == produtoAlvo.nome){
                    this.produtos[indice].nome = novoProduto
                    this.produtos[indice].valor = valorNovoProduto
                }
            })
        }
    
}