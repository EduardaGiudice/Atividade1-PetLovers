import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import AtualizarCliente from "../negocio/atualizarCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ExcluirCliente from "../negocio/excluirCliente";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import CadastroPet from "../negocio/cadastroPet";
import AtualizarPet from "../negocio/atualizarPet";
import ListagemPet from "../negocio/listagemPet";
import ExcluirPet from "../negocio/excluirPet";
import SelecionadorPet from "../negocio/selecionadorPet";
import CadastroProduto from "../negocio/cadastroProduto";
import AtualizarProduto from "../negocio/atualizarProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import ExcluirProduto from "../negocio/excluirProduto";
import SelecionadorProduto from "../negocio/selecionadorProduto";
import CadastroServico from "../negocio/cadastroServico";
import AtualizarServico from "../negocio/atualizarServico";
import ListagemServicos from "../negocio/listagemServicos";
import ExcluirServico from "../negocio/excluirServico";
import SelecionadorServico from "../negocio/selecionadorServico";
import CadastroProdutoConsumido from "../negocio/cadastroProdutosConsumidos";
import CadastroServicoConsumido from "../negocio/cadastroServicosConsumidos";
import ListagemProdutosConsumidos from "../negocio/listagemProdutosConsumidos";
import ListagemServicosConsumidos from "../negocio/listagemServicosConsumidos";

console.log(`Pet Lovers <3/n`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
  console.log(`Opções:/n`);
  console.log(`1 - Gerenciamento de clientes`);
  console.log(`2 - Gerenciamento de Produtos`);
  console.log(`3 - Gerenciamento de Servicos`);
  console.log(`4 - Gerenciamento de Pets`);
  console.log(`5 - Gerenciamento de produtos/servicos consumidos`);
  console.log(`6 - Ranking`);
  console.log(`0 - Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Digite uma opção: `);

  switch (opcao) {
    case 1:
      console.log(`Opções:`);
      console.log(`1 - Criar novo cliente`);
      console.log(`2 - Listar todos os clientes`);
      console.log(`3 - Atualizar cliente`);
      console.log(`4 - Deletar cliente`);
      console.log(`0 - Voltar`);
      let opcao_cad = entrada.receberNumero(`Digite uma opção: `);
      switch (opcao_cad) {
        case 1:
          let cadastro = new CadastroCliente(
            empresa.getClientes,
            empresa.getRG,
            empresa.getTelefones
          );
          cadastro.cadastrar();
          break;

        case 2:
          let listagem = new ListagemClientes(
            empresa.getClientes,
            empresa.getRG,
            empresa.getTelefones,
            empresa.getPets
          );
          listagem.listar();
          break;

        case 3:
          let procurarCliente = entrada.receberTexto(
            `Digite número cpf do cliente para atualizar: `
          );
          let atualizarCliente = new AtualizarCliente(
            empresa.getClientes,
            empresa.getTelefones
          );
          atualizarCliente.atualizar(procurarCliente);
          break;

        case 4:
          let selecionadorCliente = new SelecionadorCliente(
            empresa.getClientes
          );
          let cpf = entrada.receberTexto(
            `Digite o cpf do cliente para excluir: `
          );
          let cliente = selecionadorCliente.selecionar(cpf);
          let excluidor = new ExcluirCliente(empresa.getClientes);
          excluidor.excluir(cliente);
          break;

        case 0:
          break;
      }
      break;

    case 2:
      console.log(`1 - Cadastrar produto`);
      console.log(`2 - Listar todos os produtos`);
      console.log(`3 - Atualizar produto`);
      console.log(`4 - Deletar produto`);
      console.log(`0 - Voltar`);

      let opcao_prod = entrada.receberNumero(`Digite uma opção: `);
      switch (opcao_prod) {
        case 1:
          let cadastroProduto = new CadastroProduto(empresa.getProdutos);
          cadastroProduto.cadastrar();
          break;
        case 2:
          let listagemProduto = new ListagemProdutos(empresa.getProdutos);
          listagemProduto.listar();
          break;
        case 3:
          let selecionarProduto = new SelecionadorProduto(empresa.getProdutos);
          let procurarProduto = entrada.receberTexto(
            `Digite o nome do produto para atualizar: `
          );
          let atuProduto = selecionarProduto.selecionar(procurarProduto);
          let novoNomeProduto = entrada.receberTexto(
            `Digite o novo nome do produto: `
          );
          let novoValorProduto = entrada.receberNumero(
            `Digite o novo valor do serviço: `
          );
          let atualizarProduto = new AtualizarProduto(empresa.getProdutos);
          atualizarProduto.atualizar(
            atuProduto,
            novoNomeProduto,
            novoValorProduto
          );
          break;
        case 4:
          let selecionadorProduto = new SelecionadorProduto(
            empresa.getProdutos
          );
          let nome = entrada.receberTexto(
            `Digite o nome do produto para excluir: `
          );
          let produto = selecionadorProduto.selecionar(nome);
          let excluidorProduto = new ExcluirProduto(empresa.getProdutos);
          excluidorProduto.excluir(produto);
          break;

        case 0:
          break;
      }
      break;

    case 3:
      console.log(`1 - Cadastrar serviço`);
      console.log(`2 - Listar todos os serviços`);
      console.log(`3 - Atualizar serviço`);
      console.log(`4 - Deletar serviço`);
      console.log(`0 - Voltar`);

      let opcao_serv = entrada.receberNumero(`Digite uma opção: `);
      switch (opcao_serv) {
        case 1:
          let cadastroServico = new CadastroServico(empresa.getServicos);
          cadastroServico.cadastrar();
          break;
        case 2:
          let listagemServico = new ListagemServicos(empresa.getServicos);
          listagemServico.listar();
          break;
        case 3:
          let atualizarServico = new SelecionadorServico(empresa.getServicos);
          let nomeAtuServico = entrada.receberTexto(
            `Digite o nome do serviço para atualizar: `
          );
          let atuServico = atualizarServico.selecionar(nomeAtuServico);
          let novoNomeServico = entrada.receberTexto(
            `Digite o novo nome do serviço: `
          );
          let novoValorServico = entrada.receberNumero(
            `Digite o novo nome do serviço: `
          );
          let atualiServico = new AtualizarServico(empresa.getServicos);
          atualiServico.atualizar(
            atuServico,
            novoNomeServico,
            novoValorServico
          );
          break;
        case 4:
          let selecionadorServico = new SelecionadorServico(
            empresa.getServicos
          );
          let nomeServico = entrada.receberTexto(
            `Digite o nome do serviço para excluir: `
          );
          let servico = selecionadorServico.selecionar(nomeServico);
          let excluidorServico = new ExcluirServico(empresa.getServicos);
          excluidorServico.excluir(servico);
          break;

        case 0:
          break;
      }
      break;

    case 4:
      console.log(`1 - Cadastrar Pet`);
      console.log(`2 - Listar todos os Pets`);
      console.log(`3 - Atualizar Pet`);
      console.log(`4 - Deletar Pet`);
      console.log(`0 - Voltar`);

      let opcao_pet = entrada.receberNumero(`Digite uma opção: `);
      switch (opcao_pet) {
        case 1:
          let cadastroPet = new CadastroPet(
            empresa.getClientes,
            empresa.getPets
          );
          cadastroPet.cadastrar();
          break;

        case 2:
          let listagemPet = new ListagemPet(
            empresa.getPets,
            empresa.getClientes
          );
          listagemPet.listar();
          break;

        case 3:
          let procurarResponsavelPet = entrada.receberTexto(
            `Digite o CPF do cliente para atualizar o pet: `
          );
          let atualizarPet = new AtualizarPet(
            empresa.getClientes,
            empresa.getPets
          );
          atualizarPet.atualizar(procurarResponsavelPet);
          break;

        case 4:
          let excluidorPet = new ExcluirPet(
            empresa.getClientes,
            empresa.getPets
          );
          excluidorPet.excluir();
          break;

        case 0:
          break;
      }
      break;

    case 5:
      console.log(`1 - Cadastrar produto consumido`);
      console.log(`2 - Listar produtos consumidos`);
      console.log(`3 - Cadastrar serviço consumido`);
      console.log(`4 - Listar serviços consumidos`);
      console.log(`0 - Voltar`);

      let opcao_prod_serv_cons = entrada.receberNumero(`Digite uma opção: `);
      switch (opcao_prod_serv_cons) {
        case 1:
          let listagemProduto = new ListagemProdutos(empresa.getProdutos);
          listagemProduto.listar();
          let verificarProduto = new SelecionadorProduto(empresa.getProdutos);
          let verificarCliente = new SelecionadorCliente(empresa.getClientes);
          let opcaoProduto = entrada.receberTexto(
            `Digite o nome de uma das opções do produto fornecido: `
          );
          let opcaoCliente = entrada.receberTexto(
            `Digite o CPF do dono do pet: `
          );
          let opcaoPetProduto = entrada.receberTexto(`Digite o nome do Pet: `);
          let procurarProduto = verificarProduto.selecionar(opcaoProduto);
          let procurarCliente = verificarCliente.selecionar(opcaoCliente);
          let verificarPetProduto = new SelecionadorPet(
            empresa.getClientes,
            empresa.getPets
          );
          let procurarPetProduto = verificarPetProduto.selecionar(
            opcaoCliente,
            opcaoPetProduto
          );
          let quantidade = entrada.receberNumero(`Digite a quantidade: `);
          let cadastroProdutoConsumido = new CadastroProdutoConsumido(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getPets,
            empresa.getProdutosConsumidos
          );
          cadastroProdutoConsumido.cadastrar(
            procurarCliente,
            procurarProduto,
            procurarPetProduto,
            quantidade
          );
          break;

        case 2:
          let listagemProdutoConsumido = new ListagemProdutosConsumidos(
            empresa.getClientes,
            empresa.getProdutosConsumidos,
            empresa.getPets
          );
          listagemProdutoConsumido.listar();
          break;

        case 3:
          let listagemServico = new ListagemServicos(empresa.getServicos);
          listagemServico.listar();
          let verificarServico = new SelecionadorServico(empresa.getServicos);
          let verificarClienteServico = new SelecionadorCliente(
            empresa.getClientes
          );
          let verificarPet = new SelecionadorPet(
            empresa.getClientes,
            empresa.getPets
          );
          let opcaoServico = entrada.receberTexto(
            `Digite o nome de uma das opções do serviço fornecido: `
          );
          let opcaoClienteServico = entrada.receberTexto(
            `Digite o CPF do dono do Pet: `
          );
          let opcaoPet = entrada.receberTexto(
            `Digite o nome do Pet que receberá o serviço: `
          );
          let procurarServico = verificarServico.selecionar(opcaoServico);
          let procurarClienteServico =
            verificarClienteServico.selecionar(opcaoClienteServico);
          let procurarPet = verificarPet.selecionar(
            opcaoClienteServico,
            opcaoPet
          );
          let opcaoQuantidade = entrada.receberNumero(
            `Digite a quantidade de serviço fornecido: `
          );
          let cadastroServicoConsumido = new CadastroServicoConsumido(
            empresa.getClientes,
            empresa.getServicos,
            empresa.getPets,
            empresa.getServicosConsumidos
          );
          cadastroServicoConsumido.cadastrar(
            procurarClienteServico,
            procurarPet,
            procurarServico,
            opcaoQuantidade
          );

          break;

        case 4:
          let listagemServicoConsumido = new ListagemServicosConsumidos(
            empresa.getClientes,
            empresa.getPets,
            empresa.getServicosConsumidos
          );
          listagemServicoConsumido.listar();
          break;

        case 0:
          break;
      }
      break;

    case 6:
      console.log(
        `1 - Listagem dos clientes que mais consumiram produtos em quantidade`
      );
      console.log(
        `2 - Listagem dos clientes que mais consumiram serviços em quantidade`
      );
      console.log(`3 - Listagem dos produtos mais consumidos`);
      console.log(`4 - Listagem dos serviços mais consumidos`);
      console.log(
        `5 - Listagem dos produtos mais consumidos por tipo e raça de Pets.`
      );
      console.log(
        `6 - Listagem dos serviços mais consumidos por tipo e raça de Pets.`
      );
      console.log(
        `7 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade`
      );
      console.log(`0 - Voltar`);

      let opcao_ranking = entrada.receberNumero(
        `Digite uma opção: `
      );
      switch (opcao_ranking) {
        case 1:
          const listagemProdutosConsumidos = new ListagemProdutosConsumidos(
            empresa.getClientes,
            empresa.getProdutosConsumidos,
            empresa.getPets
          );
          listagemProdutosConsumidos.listarClientesMaisConsumiram();
          break;
        case 2:
          const listagemServicosConsumidos = new ListagemServicosConsumidos(
            empresa.getClientes,
            empresa.getPets,
            empresa.getServicosConsumidos
          );
          listagemServicosConsumidos.listarClientesMaisConsumiram();
          break;

        case 3:
          const listagemProdutosMaisConsumidos = new ListagemProdutosConsumidos(
            empresa.getClientes,
            empresa.getProdutosConsumidos,
            empresa.getPets
          );
          listagemProdutosMaisConsumidos.listarProdutosMaisConsumidos();
          break;

        case 4:
          const listagemServicosMaisConsumidos = new ListagemServicosConsumidos(
            empresa.getClientes,
            empresa.getPets,
            empresa.getServicosConsumidos
          );
          listagemServicosMaisConsumidos.listarServicosMaisConsumidos();
          break;

        case 5:
          const listagemProdutosMaisConsumidosPorTipoERaca =
            new ListagemProdutosConsumidos(
              empresa.getClientes,
              empresa.getProdutosConsumidos,
              empresa.getPets
            );
          listagemProdutosMaisConsumidosPorTipoERaca.listarProdutosMaisConsumidosPorTipoERaca();
          break;

        case 6:
          const listagemServicosMaisConsumidosPorTipoERaca =
            new ListagemServicosConsumidos(
              empresa.getClientes,
              empresa.getPets,
              empresa.getServicosConsumidos
            );
          listagemServicosMaisConsumidosPorTipoERaca.listarServicosMaisConsumidosPorTipoERaca();
          break;

        case 7:
          const listagemMaisConsumiramValor = new ListagemProdutosConsumidos(
            empresa.getClientes,
            empresa.getProdutosConsumidos,
            empresa.getPets
          );
          listagemMaisConsumiramValor.listarClientesMaisConsumiramValor();
          break;

        case 0:
          break;
      }
      break;

    case 0:
      execucao = false;
      console.log(`Tchau, obrigado por usar a Pet Lovers!!`);
      break;
    default:
      console.log(`Operação inválida :(`);
  }
}
