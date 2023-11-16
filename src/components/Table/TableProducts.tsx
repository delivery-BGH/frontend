/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Input } from "../ui/input";
import axios from "axios";
import { Button } from "../ui/button";
import { useApi } from "@/services/deliveryInstance";
import useProduct from "@/forms/Produtos/PaginacaoProduto/useProduto";

export default function TableProdutos() {
  //const [produtos, setProdutos] = useState([]);
  
  //const {deliveryInstance} = useApi()
  const {produtos, page, limit , setPage, setLimit, valuePesquisa, setValuePesquisa, submitPesquisa, limpaPesquisa} = useProduct()

  useEffect(() => {
    //getProdutos();
    console.log(produtos)
  }, []);

  /*const getProdutos = async () => {
    try {
      deliveryInstance.get("http://localhost:3000/product").then((res) => {
        setProdutos(res.data);
      });
    } catch (error) {
      alert("Não foi possível buscar Produtos :(");
      console.log(error);
    }
  };
  */

  


  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2">
        <Input
          type="text"
          placeholder="Pesquise por nome"
          className="w-1/3"
          value={valuePesquisa}
          onChange={(ev) => setValuePesquisa(ev.target.value)}
        />
        <button
          onClick={submitPesquisa}
          className="bg-blue-500 rounded-lg text-lg p-1 hover:bg-slate-700"
        >
          Pesquisar
        </button>
        <button
          onClick={limpaPesquisa}
          className="bg-rose-600 rounded-lg text-lg p-1 hover:bg-slate-700"
        >
          Limpar
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Url</TableHead>
            <TableHead>Preço Promocional</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Promoção ativada</TableHead>
            <TableHead>Disponível no cardápio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {produtos.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>R$ {item.price}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <div
                  className="h-[50px] w-[50px] bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
              </TableCell>
              <TableCell>R$ {item.promotionalPrice}</TableCell>
              <TableCell>
                {item.category == null ? "Vazio" : item.category.name}
              </TableCell>
              <TableCell>{item.activePromotion ? "Sim" : "Não"}</TableCell>
              <TableCell>{item.avaliable ? "Sim" : "Não"}</TableCell>

              <td>
                <Link to={`/produtos/${item._id}`}>
                  <Button variant="link">Detalhes</Button>
                </Link>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-row justify-center gap-3">
      <button onClick={ () => { 
       setPage(page > 1 ? page - 1: page)} }>Voltar</button>
      <p>{page}</p>
      <button onClick={ () => {setPage(page + 1) } }>Próximo</button>
      </div>
    </div>
  );
}
