import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let produto = new Produto()
        produto.nome = this.entrada.receberTexto('Digite o nome do produto: ')
        produto.valor = this.entrada.receberNumero('Digite o valor do produto: ')

        this.produtos.push(produto)
        console.log(`Produto cadastrado com sucesso!`)
    }

}