"use client";
import { useEffect, useState } from "react";
import opcoes from "@/data/OpcoesCaracteres";
import CustomCheck from "../../components/CustomCheck";
import Senha from "@/model/Senha";
import ExibeSenha from "@/components/ExibeSenha";
import ForcaSenha from "@/components/ForcaSenha";

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(8);
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes);
  const [senha, setSenha] = useState<string>("");
  const [vazio, setVazio] = useState<boolean>(false);
  const [forcaSenha, setForcaSenha] = useState<number>(3);

  const handlerCheckbox = (index: number) => {
    const newTipos = [...tiposCaracteres];
    newTipos[index].valor = !newTipos[index].valor;
    setTiposCaracteres([...newTipos]);
  };

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres));
  }, [tiposCaracteres, tamanho]);

  const gerarsenha = () => {
    const nenhumaSelecionada = Senha.nenhumaOpcaoSelecionada(tiposCaracteres);
    if (nenhumaSelecionada) {
      setVazio(true);
      return;
    }
    setVazio(false);
    const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres);
    setSenha(novaSenha);
  };

  return (
    <main className="flex flex-col items-center justify-center h-full ">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">
        Gerador de Senhas
      </h1>
      <div className="w-1/3 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-2xl">
          <label className="flex justify-between items-center">
            <span>Tamanho da Senha:</span>
            <span className="text-blue-500">{tamanho}</span>
          </label>
          <input
            type="range"
            min={5}
            max={30}
            value={tamanho}
            onChange={(e) => setTamanho(+e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col my-3">
          {tiposCaracteres.map((tipo, index) => (
            <CustomCheck
              key={tipo.id}
              id={tipo.id}
              tipo={tipo}
              index={index}
              handlerCheckbox={handlerCheckbox}
            />
          ))}
        </div>
        <ForcaSenha forca={forcaSenha} />
        <button
          className={`
            text-white bg-blue-600 hover:bg-blue-500  text-lg font-bold w-full rounded p-2 mt-3 
            `}
          onClick={gerarsenha}
        >
          Gerar Senha
        </button>
        {vazio ? (
          <p className="flex justify-center text-red-500 text-sm mt-3">
            Selecione pelo menos uma opção!
          </p>
        ) : (
          <ExibeSenha senha={senha} />
        )}
      </div>
    </main>
  );
}
