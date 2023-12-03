import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import Listagem from "./listagem";

export default class ListagemTelefone extends Listagem {
    private telefones: Array<Telefone>;
    private clientes: Array<Cliente>;

    constructor(telefones: Array<Telefone>, clientes: Array<Cliente>) {
        super();
        this.telefones = telefones;
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os telefones:`);
        this.telefones.forEach(telefone => {
            console.log(`Número: ${telefone.getNumero}`);
            console.log(`DDD: ${telefone.getDdd}`);
            const clienteCorrespondente = this.clientes.find(cliente => cliente === telefone.getCliente());
            if (clienteCorrespondente) {
                console.log(`Cliente: ${clienteCorrespondente.nome}`);
            } else {
                console.log(`Cliente não encontrado.`);
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}