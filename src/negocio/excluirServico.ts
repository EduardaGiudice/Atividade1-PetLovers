import Servico from "../modelo/servico";

export default class ExcluirServico {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }

    public excluir(servicoAlvo: Servico) {
        this.servicos.forEach(servico => {
            if (servico.nome === servicoAlvo.nome) {
                let indice = this.servicos.indexOf(servico)
                delete this.servicos[indice]
            }
        })
    }
}