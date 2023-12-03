import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";

export default class AtualizarCliente {
    private entrada: Entrada;
    private clientes: Array<Cliente>;
    private telefones: Array<Telefone>

    constructor(clientes: Array<Cliente>, telefones: Array<Telefone>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
        this.telefones = telefones
    }

    public atualizar(cpf: string): void {
      const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
        if (cliente) {
            let execucao = true;

            while (execucao) {
                console.log(`Deseja atualizar as informações do cliente ${cliente.nome}:`);
                console.log(`1 - Nome`);
                console.log(`2 - Nome Social`);
                console.log(`3 - Atualizar Telefone`);
                console.log(`4 - Sair`);

                let opcao = this.entrada.receberNumero(`Digite uma opção: `);

                switch (opcao) {
                    case 1:
                        let novoNome = this.entrada.receberTexto(`Digite novo nome: `);
                        cliente.setNome(novoNome);
                        console.log(`Nome atualizado com sucesso.`);
                        break;

                    case 2:
                        let novoNomeSocial = this.entrada.receberTexto(`Digite o novo nome social: `);
                        cliente.setNomeSocial(novoNomeSocial);
                        console.log(`Nome social atualizado com sucesso.`);
                        break;

                    case 3:
                      const telefonesCliente = this.telefones.filter(telefone => telefone.getCliente().getCpf.getValor === cpf)
                      if (telefonesCliente.length > 0) {
                        console.log(`Telefones disponíveis para o cliente ${cliente.nome}:`);
        
                          telefonesCliente.forEach((telefone, index) => {
                              console.log(`${index + 1}. ${telefone.getDdd + '-' + telefone.getNumero}`);
                        });
                        let numeroTelefone = this.entrada.receberTexto(`Digite o ddd e o número do telefone a ser atualizado, neste formato 12-000000000: `);
                        let partesTelefone = numeroTelefone.split('-')
                        let dddAntigo = new String(partesTelefone[0].valueOf()).valueOf()
                        let numeroAntigo = new String(partesTelefone[1].valueOf()).valueOf()

                        const telefoneSelecionado = telefonesCliente.find(telefone => telefone.getDdd + '-' + telefone.getNumero === dddAntigo + '-' + numeroAntigo);
                        if (telefoneSelecionado) {
                          let novoNumero = this.entrada.receberTexto(`Informe o novo número do telefone: `)
                          let partesTelefone = novoNumero.split('-')
                          let ddd = new String(partesTelefone[0].valueOf()).valueOf()
                          let numero = new String(partesTelefone[1].valueOf()).valueOf()
                          telefoneSelecionado.setNumero(ddd, numero)
      
                        } else {
                          console.log(`Esse cliente não possui telefone cadastrado ${cliente.nome}.`)
                      }
                    }
                      break;

                    case 4:
                        execucao = false;
                        console.log(`Operação finalizada.`);
                        break;

                    default:
                        console.log(`Opção inválida.`);
                        break;
                }
            }
          
        } else {
            console.log(`Cliente com CPF ${cpf} não encontrado.`);
        }
    }
}