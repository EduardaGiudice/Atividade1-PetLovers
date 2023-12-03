import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  private rgs: Array<RG>;
  private telefones: Array<Telefone>;

  constructor(
    clientes: Array<Cliente>,
    rgs: Array<RG>,
    telefones: Array<Telefone>
  ) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
    this.rgs = rgs;
    this.telefones = telefones;
  }

  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
    let nome: string = this.entrada.receberTexto(
      `Digite o nome do cliente: `
    );
    let nomeSocial: string = this.entrada.receberTexto(
      `Digite o nome social do cliente: `
    );

    // CPF
    let valorCPF: string = this.entrada.receberTexto(
      `Digite o número do CPF do cliente: `
    );
    let dataCPF: string = this.entrada.receberTexto(
      `Digite a data de emissão do CPF no formato dd/mm/yyyy: `
    );
    let partesDataCPF: Array<string> = dataCPF.split('/');
    let anoCPF: number = Number(partesDataCPF[2]);
    let mesCPF: number = Number(partesDataCPF[1]) - 1;
    let diaCPF: number = Number(partesDataCPF[0]);
    let dataEmissaoCPF: Date = new Date(anoCPF, mesCPF, diaCPF);
    let cpf: CPF = new CPF(valorCPF, dataEmissaoCPF);

    // Verificando se o CPF já está em uso
    let cpfEmUso: boolean = false;
    for (let cliente of this.clientes) {
      if (cliente.getCpf.getValor === cpf.getValor) {
        cpfEmUso = true;
        break;
      }
    }

    if (cpfEmUso) {
      console.log(`Este CPF já está em uso!`);
      return;
    }

        //RG
        let valorRG = this.entrada.receberTexto(`Digite o número do RG: `);
        let dataRG = this.entrada.receberTexto(`Digite a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRG = dataRG.split('/')
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)

        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        
        //RG
        let execucaorg = true

        while (execucaorg) {
            console.log(`Deseja cadastrar mais algum rg?`);
            console.log(`1 - Sim`);
            console.log(`2 - Não`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Digite uma opção: `)

            switch (opcao) {

                case 1:

                    //RG
                    let valorRG = this.entrada.receberTexto(`Digite o número do RG: `);
                    let dataRG = this.entrada.receberTexto(`Digite a data de emissão do RG, no padrão dd/mm/yyyy: `);
                    let partesDataRG = dataRG.split('/')
                    let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
                    let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
                    let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
                    let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)
                    let salvarrg = new RG(valorRG, dataEmissaoRG, cliente);
                    this.rgs.push(salvarrg)
                    break;

                case 2:
                    execucaorg = false
                    break;
            }
        }

        //Telefone
        let execucao = true

        while (execucao) {
            console.log(`Gostaria de cadastrar algum telefone(s):`);
            console.log(`1 - Sim`);
            console.log(`2 - Não`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Digite uma opção: `)

            switch (opcao) {

                case 1:

                    //Telefone
                    let adcTelefone = this.entrada.receberTexto(`Digite o ddd e em seguida o número, no seguinte formato 12-00000000: `);
                    let partesTelefone = adcTelefone.split('-')
                    let ddd = new String(partesTelefone[0].valueOf()).valueOf()
                    let numero = new String(partesTelefone[1].valueOf()).valueOf()
                    let salvarTelefone = new Telefone(ddd, numero, cliente);
                    this.telefones.push(salvarTelefone)
                    break;

                case 2:
                    execucao = false
                    break;
            }
        }


        
       // console.log(salvarrg);
      //  console.log(salvarTelefone);
        console.log(`\nCadastro concluído :)\n`);
    }
}