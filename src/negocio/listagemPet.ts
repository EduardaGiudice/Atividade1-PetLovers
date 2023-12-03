import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPet extends Listagem {
    private pets: Array<Pet>
    private clientes: Array<Cliente>

    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super();
        this.pets = pets;
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`Nome: ` + pet.getNome);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`Gênero: ` + pet.getGenero);
            const clienteResponsavel = this.clientes.find(cliente => cliente.getCpf.getValor === pet.getClienteCPF());
            if (clienteResponsavel) {
                console.log(`Nome do dono: ${clienteResponsavel.nome}`);
            } else {
                console.log(`Dono não encontrado.`);
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}