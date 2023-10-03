import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TableProdutos() {
  const [produtos, setProdutos] = useState([]); 

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const response = await fetch("http://localhost:3000/produtos");
      if (!response.ok) {
        throw new Error("Não foi possível buscar os produtos.");
      }
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th>Url</th>
          <th>Preço Promocional</th>
          <th>Categoria</th>
          <th>Promoção ativada</th>
          <th>Disponível no cardápio</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.preco} unid.</td>
            <td>{item.descricao}</td>
            <td>{item.urlImg}</td>
            <td>{item.precoPromocional}</td>
            <td>{item.categoria}</td>
            <td>{item.promocaoAtiva ? "Sim" : "Não"}</td>
            <td>{item.disponivel ? "Sim" : "Não"}</td>
            <td>
              <Link to={`/produtos/${item.id}`}>Ver</Link>
              <Link to={`/produtos/${item.id}/update`}>Atualizar</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
