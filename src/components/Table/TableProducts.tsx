/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function TableProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const response = await fetch("http://localhost:3000/product");
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead >
          <TableHead>Nome</TableHead >
          <TableHead>Preço</TableHead >
          <TableHead>Descrição</TableHead >
          <TableHead>Url</TableHead >
          <TableHead>Preço Promocional</TableHead >
          <TableHead>Categoria</TableHead >
          <TableHead>Promoção ativada</TableHead >
          <TableHead>Disponível no cardápio</TableHead >
        </TableRow>
      </TableHeader>
      <TableBody>
        {produtos.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell>{item._id}</TableCell >
            <TableCell>{item.name}</TableCell >
            <TableCell>{item.price} unid.</TableCell >
            <TableCell>{item.description}</TableCell >
            <TableCell>
              <div className="h-[50px] w-[50px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url('${item.img}')` }} />
            </TableCell >
            <TableCell>{item.promotionalPrice}</TableCell >
            <TableCell>{item.category}</TableCell >
            <TableCell>{item.avaliable ? "Sim" : "Não"}</TableCell >
            <TableCell>{item.activePromotion ? "Sim" : "Não"}</TableCell >
            <td>
              <Link to={`/produtos/${item.id}`}>Detalhes</Link>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
