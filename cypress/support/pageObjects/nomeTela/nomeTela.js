export class telaHome
{
    //SELETORES CSS

    get logotipo() {
        return cypress.get(".logo")
    }

    get slogan() {
        return cypress.get(".h1")
    }

    get mensagem() {
        return cypress.get("body p")
    }

    get iconeBotaoCadastrePontoDeDoacao() {
        return cypress.get("span svg")
    }

    get textoBotaoCadastrePontoDeDoacao() {
        return cypress.get("strong")
    }

    get botaoCadastrePontoDeDoacao() {
        return cypress.get("a[href='/signup']")
    }

    //METÓDOS DE AÇÃO

    verificarLogotipoVisível() {
        this.logotipo.should("be.visible")
    }

    verificarSloganVisível() {
        this.slogan.should("be.visible")
    }

    verificarMensagemVisível() {
        this.mensagem.should("be.visible")
    }

    verificarIconeBotaoCadastrePontoDeDoacaoVisível() {
        this.iconeBotaoCadastrePontoDeDoacao.should("be.visible")
    }

    verificarTextoBotaoCadastrePontoDeDoacaoVisível() {
        this.textoBotaoCadastrePontoDeDoacao.should("be.visible")
    }

    verificarBotaoCadastrePontoDeDoacaoVisível() {
        this.botaoCadastrePontoDeDoacao.should("be.visible")
    }
}