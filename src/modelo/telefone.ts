import Cliente from "./cliente";

export default class Telefone {
    private ddd: string
    private numero: string
    private cliente: Cliente; // Propriedade para armazenar a referência ao cliente
    constructor(ddd: string, numero: string, cliente: Cliente) {
        this.ddd = ddd
        this.numero = numero
        this.cliente = cliente; // Atribui o cliente correspondente
    }

    public get getDdd(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public setNumero(novoddd: string, novoNumero: string): void {
        this.ddd = novoddd
        this.numero = novoNumero;
    }
}