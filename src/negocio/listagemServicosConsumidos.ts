import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import ServicoConsumido from "../modelo/servicoConsumido";
import Listagem from "./listagem";

export default class ListagemServicosConsumidos extends Listagem {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private servicoConsumidos: Array<ServicoConsumido>
    constructor(clientes: Array<Cliente>,pets: Array<Pet>, servicoConsumidos: Array<ServicoConsumido>) {
        super()
        this.clientes = clientes
        this.pets = pets
        this.servicoConsumidos = servicoConsumidos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos consumidos por cliente:`);
        this.servicoConsumidos.forEach(servicoConsumidos => {
            const clienteResponsavel = this.clientes.find(cliente => cliente.getCpf.getValor === servicoConsumidos.getCliente().getCpf.getValor);
            if (clienteResponsavel) {
                console.log(`Nome do dono: ${clienteResponsavel.nome}`);
            } else {
                console.log(`Dono não encontrado.`);
            }
            console.log(`Produto: ${servicoConsumidos.getServico().nome}`);
            console.log(`Pet: ${servicoConsumidos.getPet().getNome}`);
            console.log(`Quantidade: ${servicoConsumidos.getQuantidade()}`);

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarClientesMaisConsumiram(): void {
        const clientesQuantidade: Map<string, number> = new Map();

        // Calcular a quantidade total de produtos consumidos por cada cliente
        this.servicoConsumidos.forEach(servicoConsumido => {
            const clienteCpf = servicoConsumido.getCliente().getCpf.getValor;
            const quantidade = servicoConsumido.getQuantidade();
            
            if (clientesQuantidade.has(clienteCpf)) {
                clientesQuantidade.set(clienteCpf, clientesQuantidade.get(clienteCpf)! + quantidade);
            } else {
                clientesQuantidade.set(clienteCpf, quantidade);
            }
        });

        // Ordenar os clientes por quantidade de produtos consumidos em ordem decrescente
        const clientesOrdenados = Array.from(clientesQuantidade.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);

        console.log(`\nClientes que mais consumiram serviços em quantidade:`);
        clientesOrdenados.forEach(([clienteCpf, quantidade]) => {
            const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === clienteCpf);
            if (cliente) {
                console.log(`Nome do Cliente: ${cliente.nome}`);
                console.log(`Quantidade de Serviços Consumidos: ${quantidade}`);
                console.log(`--------------------------------------`);
            } else {
                console.log(`Cliente não encontrado.`);
            }
        });
        console.log(`\n`);
    }

    public listarServicosMaisConsumidos(): void {
        const servicosQuantidade: Map<string, number> = new Map();
      
        // Calcular a quantidade total de cada produto consumido
        this.servicoConsumidos.forEach(servicoConsumido => {
          const servicoNome = servicoConsumido.getServico().nome;
          const quantidade = servicoConsumido.getQuantidade();
          
          if (servicosQuantidade.has(servicoNome)) {
            servicosQuantidade.set(servicoNome, (servicosQuantidade.get(servicoNome) ?? 0) + quantidade);
          } else {
            servicosQuantidade.set(servicoNome, quantidade);
          }
        });
      
        // Ordenar os produtos por quantidade consumida em ordem decrescente
        const servicosOrdenados = Array.from(servicosQuantidade.entries()).sort((a, b) => b[1] - a[1]);
      
        console.log(`\nServiços mais consumidos:`);
        servicosOrdenados.forEach(([servicoNome, quantidade]) => {
          console.log(`Serviço: ${servicoNome}`);
          console.log(`Quantidade: ${quantidade}`);
          console.log(`--------------------------------------`);
        });
        console.log(`\n`);
      }

      public listarClientesMaisConsumiramValor(): void {
        const clientesValor: Map<string, number> = new Map();
      
        // Calcular o valor total consumido por cada cliente
        this.servicoConsumidos.forEach(servicoConsumido => {
          const clienteCpf = servicoConsumido.getCliente().getCpf.getValor;
          const valor = servicoConsumido.getServico().valor * servicoConsumido.getQuantidade();
          
          if (clientesValor.has(clienteCpf)) {
            clientesValor.set(clienteCpf, (clientesValor.get(clienteCpf) ?? 0) + valor);
          } else {
            clientesValor.set(clienteCpf, valor);
          }
        });
      
        // Ordenar os clientes por valor consumido em ordem decrescente
        const clientesOrdenados = Array.from(clientesValor.entries()).sort((a, b) => b[1] - a[1]);
      
        console.log(`\nClientes que mais consumiram em valor:`);
        clientesOrdenados.slice(0, 5).forEach(([clienteCpf, valor]) => {
          const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === clienteCpf);
          if (cliente) {
            console.log(`Nome do Cliente: ${cliente.nome}`);
            console.log(`Valor Consumido: ${valor}`);
            console.log(`--------------------------------------`);
          } else {
            console.log(`Cliente não encontrado.`);
          }
        });
        console.log(`\n`);
      }

      public listarServicosMaisConsumidosPorTipoERaca(): void {
        const servicosTipoRaca: Map<string, Map<string, number>> = new Map();

        // Calcular a quantidade total de cada serviço consumido por tipo e raça de pet
        this.servicoConsumidos.forEach(servicoConsumido => {
            const tipoPet = servicoConsumido.getPet().getTipo;
            const racaPet = servicoConsumido.getPet().getRaca;
            const quantidade = servicoConsumido.getQuantidade();
            
            if (!servicosTipoRaca.has(tipoPet)) {
                servicosTipoRaca.set(tipoPet, new Map());
            }

            const servicosRaca = servicosTipoRaca.get(tipoPet);
            if (servicosRaca && servicosRaca.has(racaPet)) {
                servicosRaca.set(racaPet, (servicosRaca.get(racaPet) ?? 0) + quantidade);
            } else {
                servicosRaca?.set(racaPet, quantidade);
            }
        });

        console.log(`\nServiços mais consumidos por tipo e raça de pets:`);
        servicosTipoRaca.forEach((servicosRaca, tipoPet) => {
            console.log(`Tipo de Pet: ${tipoPet}`);
            console.log(`-------------------------`);
            Array.from(servicosRaca.entries()).sort((a, b) => b[1] - a[1]).forEach(([racaPet, quantidade]) => {
                console.log(`Raça do Pet: ${racaPet}`);
                console.log(`Quantidade: ${quantidade}`);
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        });
    }

}