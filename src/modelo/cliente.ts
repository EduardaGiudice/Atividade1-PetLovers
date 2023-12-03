import CadastroProdutoConsumido from "../negocio/cadastroProdutosConsumidos"
import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>

    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
        
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public adicionarRG(valor: string, dataEmissao: Date): void {
        const rg = new RG(valor, dataEmissao, this);
        this.rgs.push(rg);
    }

    public adicionarTelefone(ddd: string, numero: string): void {
        const telefone = new Telefone(ddd, numero, this);
        this.telefones.push(telefone);
    }

    public adicionarPet(nome: string, raca: string, genero: string, tipo: string): void {
        const pet = new Pet(nome, raca, genero, tipo, this);
        this.pets.push(pet);
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setNomeSocial(nomeSocial: string): void {
        this.nomeSocial = nomeSocial;
    }

}