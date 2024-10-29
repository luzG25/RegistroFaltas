import React from 'react';
import './Erro.css';

const Erro = ({ titulo, mensagem, onClose }) => {
  if (!mensagem) return null; 

  return (
    <div className="erro">
      <div className="erro-modal">
        <h2>{titulo}</h2>
        <p>{mensagem}</p>
        <button onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default Erro;