import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"

export default class SelecionadorCliente {
    private clientes: Array<Cliente>
    constructor (clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public selecionar(cpf: string) {
        let cpfVazio = new CPF("", new Date())
        let clienteAlvo = new Cliente("", "", cpfVazio)

        this.clientes.forEach(cliente => {
                if (cpf === cliente.getCpf.getValor) {
                    clienteAlvo = cliente
                }
        })
        return clienteAlvo
    }
}