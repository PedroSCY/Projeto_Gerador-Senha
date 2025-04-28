import React from 'react'

interface CustomCheckProps {
    id: string
    tipo: { nome: string; valor: boolean };
    index: number;
    handlerCheckbox: (index: number) => void;
}

export default function CustomCheck({ id, tipo, index, handlerCheckbox }: CustomCheckProps) {
  
  const Id = `checkbox-${id}`
  return (
    <div className="flex text-xl gap-2">
            <input
              id={Id}
              type="checkbox"
              checked={tipo.valor}
              onChange={() => handlerCheckbox(index)}
            />
            <label htmlFor={Id}>{tipo.nome}</label>
          </div>
  )
}
