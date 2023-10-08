
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
      const response = await fetch("http://localhost:3000/product");
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };
  const products = produtos.find(p => p._id === id)

  if (!products) {
    return (
      <h2>Ops... Esse produto não foi encontrado!</h2>
    )
  }

  return (
    <>
      <div className="flex flex-col">
        <h2>Nome: {products.name}</h2>
        <p>Preço: {products.price}</p>
        <p>Descrição: {products.description}</p>
        <p className="flex flex-row">Imagem: <div className="h-[50px] w-[50px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url('${products.img}')` }} /> </p>
        <p>Promoção: {products.promotionalPrice}</p>
        <p>Categoria: {products.category}</p>
        <p>Promoção: {products.avaliable ? "Sim" : "Não"}</p>
        <p>Cardápio: {products.activePromotion ? "Sim" : "Não"}</p>

      </div>
      <div>

        <Link to={`/produtos/${products._id}/update`}>Atualizar</Link>

      </div>
    </>
  )
}

