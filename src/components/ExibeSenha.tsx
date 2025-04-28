"use client";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import React, { useEffect } from "react";

interface ExibeSenhaProps {
  senha: string;
}

export default function ExibeSenha({ senha }: ExibeSenhaProps) {
  const [copiado, setCopiado] = React.useState(false);
  const [mostrarAviso, setMostrarAviso] = React.useState(false);

  const copiarSenha = () => {
    navigator.clipboard.writeText(senha);
    setCopiado(true);
    setMostrarAviso(true);
    setTimeout(() => {
      setMostrarAviso(false);
    }, 2000);
  };

  useEffect(() => {
    setCopiado(false);
    setMostrarAviso(false);
  }, [senha]);

  return (
    <div className=" flex flex-col w-full mt-3">
      {senha && (
        <>
          <span className="font-bold text-lg">Senha Gerada:</span>
          <div className="flex justify-between p-2 border bg-gray-100 rounded text-slate-700">
            <span className="flex-1">{senha}</span>
            {copiado ? (
              <IconCheck
                className="text-green-500 cursor-pointer"
                stroke={3}
                onClick={copiarSenha}
              />
            ) : (
              <IconCopy
                className="hover:text-blue-500 cursor-pointer"
                onClick={copiarSenha}
              />
            )}
          </div>
        </>
      )}

      <div className="flex justify-end mt-2">
        {mostrarAviso && (
          <p className=" text-zinc-200 p-1.5 text-xs rounded-xl select-none bg-green-500">
            Senha Copiada!
          </p>
        )}
      </div>

    </div>
  );
}
