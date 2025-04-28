import IdsCaracteres from "./idsCaracteres";
import OpcaoCaractere from "./OpcaoCaractere";

export default class Senha {

    static opcoesTem(id: string, opcoes: OpcaoCaractere[]) {
        const opcao = opcoes.find(opcao => opcao.id === id);
        return opcao ? opcao.valor : false;
    }

    static gerarSenha(tamanho: number, opcoes: OpcaoCaractere[]) {
        let caracteresPossiveis = ""

        if(Senha.opcoesTem(IdsCaracteres.NUMEROS, opcoes)) {
            caracteresPossiveis += "0123456789"
        }
        if(Senha.opcoesTem(IdsCaracteres.MAIUSCULAS, opcoes)) {
            caracteresPossiveis += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(Senha.opcoesTem(IdsCaracteres.MINUSCULAS, opcoes)) {
            caracteresPossiveis += "abcdefghijklmnopqrstuvwxyz"
        }
        if(Senha.opcoesTem(IdsCaracteres.ESPECIAIS, opcoes)) {
            caracteresPossiveis += "!@#$%^&*()_+-[]{}|;:,.<>?"
        }
        if(caracteresPossiveis.length === 0) {
            return "Selecione pelo menos um tipo de caractere."
        }
        
        let senha = ""
        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteresPossiveis.length);
            senha += caracteresPossiveis.charAt(indiceAleatorio);
        }
        return senha;

    }
}