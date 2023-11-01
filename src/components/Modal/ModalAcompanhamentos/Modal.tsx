import React from 'react';

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const Modal: React.FC<IModal> = ({ isOpen, setOpen }) => {
  if (isOpen) {
    return (
      <div>
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white decoration-black p-16 rounded-lg flex flex-col items-center' style={{color: "black"}}>
          <h2>Selecione um acompanhamento</h2>
          <div className='flex gap-2'>
          <button style={{padding: "0.7rem", color: "white"}} className='rounded bg-blue-400 text-lg'>Adicionar</button>
          <button style={{padding: "0.7rem", color: "white"}} className='rounded bg-red-600 text-lg' onClick={() => setOpen(!isOpen)}>Fechar</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null; // ou apenas <></>
  }
};
