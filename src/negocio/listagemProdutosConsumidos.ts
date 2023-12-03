import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import ProdutoConsumido from "../modelo/produtoConsumido";
import Listagem from "./listagem";

export default class ListagemProdutosConsumidos extends Listagem {
    private clientes: Array<Cliente>
    private produtosConsumidos: Array<ProdutoConsumido>
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, produtosConsumidos: Array<ProdutoConsumido>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.produtosConsumidos = produtosConsumidos
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos consumidos por cliente:`);
        this.produtosConsumidos.forEach(produtoConsumido => {
            const clienteResponsavel = this.clientes.find(cliente => cliente.getCpf.getValor === produtoConsumido.getCliente().getCpf.getValor);
            if (clienteResponsavel) {
                console.log(`Nome do dono: ${clienteResponsavel.nome}`);
            } else {
                console.log(`Dono não encontrado.`);
            }
            console.log(`Quantidade: ${produtoConsumido.getQuantidade()}`);
            console.log(`Produto: ${produtoConsumido.getProduto().nome}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarClientesMaisConsumiram(): void {
        const clientesQuantidade: Map<string, number> = new Map();

        // Calcular a quantidade total de produtos consumidos por cada cliente
        this.produtosConsumidos.forEach(produtoConsumido => {
            const clienteCpf = produtoConsumido.getCliente().getCpf.getValor;
            const quantidade = produtoConsumido.getQuantidade();
            
            if (clientesQuantidade.has(clienteCpf)) {
                clientesQuantidade.set(clienteCpf, clientesQuantidade.get(clienteCpf)! + quantidade);
            } else {
                clientesQuantidade.set(clienteCpf, quantidade);
            }
        });

        // Ordenar os clientes por quantidade de produtos consumidos em ordem decrescente
        const clientesOrdenados = Array.from(clientesQuantidade.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);

        console.log(`\nClientes que mais consumiram produtos em quantidade:`);
        clientesOrdenados.forEach(([clienteCpf, quantidade]) => {
            const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === clienteCpf);
            if (cliente) {
                console.log(`Nome do Cliente: ${cliente.nome}`);
                console.log(`Quantidade de Produtos Consumidos: ${quantidade}`);
                console.log(`--------------------------------------`);
            } else {
                console.log(`Cliente não encontrado.`);
            }
        });
        console.log(`\n`);
    }

    public listarProdutosMaisConsumidos(): void {
        const produtosQuantidade: Map<string, number> = new Map();
      
        // Calcular a quantidade total de cada produto consumido
        this.produtosConsumidos.forEach(produtoConsumido => {
          const produtoNome = produtoConsumido.getProduto().nome;
          const quantidade = produtoConsumido.getQuantidade();
          
          if (produtosQuantidade.has(produtoNome)) {
            produtosQuantidade.set(produtoNome, (produtosQuantidade.get(produtoNome) ?? 0) + quantidade);
          } else {
            produtosQuantidade.set(produtoNome, quantidade);
          }
        });
      
        // Ordenar os produtos por quantidade consumida em ordem decrescente
        const produtosOrdenados = Array.from(produtosQuantidade.entries()).sort((a, b) => b[1] - a[1]);
      
        console.log(`\nProdutos mais consumidos:`);
        produtosOrdenados.forEach(([produtoNome, quantidade]) => {
          console.log(`Produto: ${produtoNome}`);
          console.log(`Quantidade: ${quantidade}`);
          console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarClientesMaisConsumiramValor(): void {
        const clientesValor: Map<string, number> = new Map();
      
        // Calcular o valor total consumido por cada cliente
        this.produtosConsumidos.forEach(produtoConsumido => {
          const clienteCpf = produtoConsumido.getCliente().getCpf.getValor;
          const valor = produtoConsumido.getProduto().valor * produtoConsumido.getQuantidade();
          
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

      public listarProdutosMaisConsumidosPorTipoERaca(): void {
        const produtosTipoRaca: Map<string, Map<string, number>> = new Map();

        // Calcular a quantidade total de cada produto consumido por tipo e raça de pet
        this.produtosConsumidos.forEach(produtoConsumido => {
            const tipoPet = produtoConsumido.getPet().getTipo;
            const racaPet = produtoConsumido.getPet().getRaca;
            const quantidade = produtoConsumido.getQuantidade();
            
            if (!produtosTipoRaca.has(tipoPet)) {
                produtosTipoRaca.set(tipoPet, new Map());
            }

            const produtosRaca = produtosTipoRaca.get(tipoPet);
            if (produtosRaca && produtosRaca.has(racaPet)) {
                produtosRaca.set(racaPet, (produtosRaca.get(racaPet) ?? 0)+ quantidade);
            } else {
                produtosRaca?.set(racaPet, quantidade);
            }
        });

        console.log(`\nProdutos mais consumidos por tipo e raça de pets:`);
        produtosTipoRaca.forEach((produtosRaca, tipoPet) => {
            console.log(`Tipo de Pet: ${tipoPet}`);
            console.log(`-------------------------`);
            Array.from(produtosRaca.entries()).sort((a, b) => b[1] - a[1]).forEach(([racaPet, quantidade]) => {
                console.log(`Raça do Pet: ${racaPet}`);
                console.log(`Quantidade: ${quantidade}`);
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        });
    }
}