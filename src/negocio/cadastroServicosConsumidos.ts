import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";
import ServicoConsumido from "../modelo/servicoConsumido";

export default class CadastroServicoConsumido{
    private clientes: Array<Cliente>
    private servico: Array<Servico>
    private pet: Array<Pet>
    private entrada: Entrada
    private servicoConsumido: Array<ServicoConsumido>

    constructor(clientes: Array<Cliente>, servico: Array<Servico>, pet: Array<Pet>, servicoConsumido: Array<ServicoConsumido>) {
        this.clientes = clientes
        this.servico = servico
        this.pet = pet
        this.entrada = new Entrada()
        this.servicoConsumido = servicoConsumido
    }
    public cadastrar(clienteAlvo: Cliente, petAlvo: Pet, servicoAlvo: Servico, quantidade: number){

            console.log(`Deseja cadastrar o serviço ${servicoAlvo.nome} ao cliente ${clienteAlvo.nome} para o pet ${petAlvo.getNome}?:`);
            console.log(`1 - Sim`);
            console.log(`2 - Não`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Digite uma opção: `)

            switch (opcao) {
                case 1:
                    let servicoCons = new ServicoConsumido(clienteAlvo, servicoAlvo, petAlvo, quantidade)

                    this.servicoConsumido.push(servicoCons)
                    console.log(`Serviço cadastrado com sucesso!`)
                    break;

                case 2:
                    break;
            }
    }
    
}