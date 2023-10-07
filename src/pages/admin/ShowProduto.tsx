import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ShowProduto() {

  const [produtos, setProdutos] = useState([])
  const { id } = useParams<{id: string}>()
  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const response = await fetch("http://localhost:3000/produtos");
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };
  const product = produtos.find(p => p._id === +id)

  if (!product) {
    return (
      <h2>Ops... Esse produto não foi encontrado!</h2>
    )
  }

  return (
    <>
      <div className="flex flex-col">
        <h2>Nome: {product.nome}</h2>
        <p>Preço: {product.preco}</p>
        <p>Descrição: {product.descricao}</p>
        <p className="flex flex-row">Imagem: <div className="h-[50px] w-[50px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url('${product.urlImg}')` }} /> </p>
        <p>Promoção: {product.precoPromocional}</p>
        <p>Categoria: {product.categoria}</p>
        <p>Promoção: {product.promocaoAtiva ? "Sim" : "Não"}</p>
        <p>Cardápio: {product.disponivel ? "Sim" : "Não"}</p>

      </div>
      <div>

        <Link to={`/produtos/${product.id}/update`}>Atualizar</Link>

      </div>
    </>
  )
}

