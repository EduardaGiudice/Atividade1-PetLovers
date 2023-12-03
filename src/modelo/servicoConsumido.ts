import Cliente from "./cliente"
import Pet from "./pet";
import Servico from "./servico";

export default class ServicoConsumido {
    private cliente: Cliente
    private servico: Servico
    private pets: Pet
    private quantidade: number;

    constructor(cliente: Cliente, servico: Servico, pets: Pet, quantidade: number) {
        this.cliente = cliente; // Atribui o cliente correspondente
        this.servico = servico
        this.pets = pets
        this.quantidade = quantidade
    }
    public getCliente(): Cliente {return this.cliente}
    public getServico(): Servico {return this.servico}
    public getPet(): Pet {return this.pets}
    public getClienteCPF(): string {
        return this.cliente.getCpf.getValor; // Retorna apenas o valor do CPF do cliente
    }
    public getQuantidade(): number {
        return this.quantidade;
    }
}