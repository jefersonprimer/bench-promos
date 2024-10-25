// CardProduto.js
import React from 'react';
import styles from './CardProdutos.module.css'

function CardProduto({ produto }) {
  return (
    <div className={styles.CardProdutoTheme}>
      <div>{produto.tipo} - {produto.tempo}</div>
      <h3>{produto.nome}</h3>
      <img src={produto.imagem} alt={produto.nome} />
      {/* Outros detalhes */}
      <button>Acessar</button>
    </div>
  );
}

export default CardProduto;
