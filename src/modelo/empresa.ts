import Cliente from "./cliente"
import Pet from "./pet"
import Produto from "./produto"
import ProdutoConsumido from "./produtoConsumido"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"
import ServicoConsumido from "./servicoConsumido"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private rgs: Array<RG>
    private telefones: Array<Telefone>
    private pets: Array<Pet>
    private produtosConsumidos: Array<ProdutoConsumido>
    private servicosConsumidos: Array<ServicoConsumido>
    static getProdutos: Produto[]
    static getClientes: Cliente[]
    static getTelefones: Telefone[]

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.rgs = []
        this.telefones = []
        this.pets = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getRG(){
        return this.rgs
    }
    public get getTelefones(){
        return this.telefones
    }
    public get getPets(){
        return this.pets
    }
    public get getProdutosConsumidos(){
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(){
        return this.servicosConsumidos
    }
}