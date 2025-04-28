import IdsCaracteres from "@/model/idsCaracteres"
import OpcaoCaractere from "@/model/OpcaoCaractere"

const opcoes: OpcaoCaractere[] = [
    { id: IdsCaracteres.NUMEROS, nome: "Números", valor: true },
    { id: IdsCaracteres.MAIUSCULAS, nome: "Letras Maiúsculas", valor: false },
    { id: IdsCaracteres.MINUSCULAS, nome: "Letras Minúsculas", valor: false },
    { id: IdsCaracteres.ESPECIAIS, nome: "Caracteres Especiais", valor: false },
]

export default opcoes