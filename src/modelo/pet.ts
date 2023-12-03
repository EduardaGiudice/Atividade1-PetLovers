import Cliente from "./cliente"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private cliente: Cliente

    constructor(nome: string, raca: string, genero: string, tipo: string, cliente: Cliente) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.cliente = cliente; // Atribui o cliente correspondente
    }

    public get getNome(){return this.nome}
    public setNome(nome: string) { this.nome = nome }
    public get getRaca(){return this.raca}
    public setRaca(raca: string) { this.raca = raca }
    public get getGenero(){return this.genero}
    public setGenero(genero: string) { this.genero = genero }
    public get getTipo(){return this.tipo}
    public setTipo(tipo: string) { this.tipo = tipo }
    public getCliente(): Cliente {return this.cliente}
    public getClienteCPF(): string {
        return this.cliente.getCpf.getValor; // Retorna o valor do CPF do cliente
    }
}