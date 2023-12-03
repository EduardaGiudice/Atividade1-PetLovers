import Cliente from "./cliente"
import Pet from "./pet";
import Produto from "./produto";

export default class ProdutoConsumido {
    private cliente: Cliente
    private produto: Produto
    private quantidade: number;
    private pets: Pet

    constructor(cliente: Cliente, produto: Produto, pets: Pet, quantidade: number) {
        this.cliente = cliente; // Atribui o cliente correspondente
        this.produto = produto
        this.quantidade = quantidade
        this.pets = pets
    }
    
    public getCliente(): Cliente {return this.cliente}
    public getProduto(): Produto {return this.produto}
    public getPet(): Pet {return this.pets}
    public getClienteCPF(): string {
        return this.cliente.getCpf.getValor; // Retorna apenas o valor do CPF do cliente
    }
    public getQuantidade(): number {
        return this.quantidade;
    }
}