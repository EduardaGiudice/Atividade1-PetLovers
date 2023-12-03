import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"

export default class SelecionadorPet {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    constructor (clientes: Array<Cliente>, pets: Array<Pet>) {
        this.clientes = clientes
        this.pets = pets
    }

    public selecionar(cpf: string, nomePet: string) {
        let cpfVazio = new CPF("", new Date())
        let clienteAlvo = new Cliente("", "", cpfVazio)
        let petAlvo = new Pet("", "", "", "", clienteAlvo)

        this.clientes.forEach(cliente => {
            this.pets.forEach(pet => {
                if (cpf === cliente.getCpf.getValor || nomePet === pet.getNome) {
                    petAlvo = pet
                }
            })
        })
        return petAlvo
    }
}