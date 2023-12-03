import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class AtualizarServico{
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public atualizar(servicoAlvo: Servico, novoServico: string, novoValorServico: number) {
        this.servicos.forEach((servico, indice) => {
            if (servico.nome === servicoAlvo.nome) {
                this.servicos[indice].nome = novoServico
                this.servicos[indice].valor = novoValorServico
            }
        })
    }
    
}