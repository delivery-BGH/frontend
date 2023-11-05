/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function TableCategory() {
  const [categorias, setCategorias] = useState([]);
  const [valuePesquisa, setValuePesquisa] = useState("");

  useEffect(() => {
    getCategorys();
  }, []);

  const getCategorys = async () => {
    try {
      axios.get("http://localhost:3000/category").then((res) => {
        setCategorias(res.data);
      });
    } catch (error) {
      alert("Não foi possível buscar categorias :(");
      console.log(error);
    }
  };

  const submitPesquisaCategory = () => {
    axios
      .get(
        `http://localhost:3000/category/category/query?filter=${valuePesquisa}`
      )
      .then((res) => {
        console.log(res.data);
        setCategorias(res.data);
      })
      .catch((err) => {
        console.log(`Não foi possível buscar produto ${err}`);
      });
  };

  const limpaPesquisa = () => {
    getCategorys();
    setValuePesquisa("");
  };
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Input
          type="text"
          placeholder="Pesquise por nome"
          className="w-1/3"
          value={valuePesquisa}
          onChange={(ev) => setValuePesquisa(ev.target.value)}
        />
        <button
          onClick={submitPesquisaCategory}
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
            <TableHead>Descrição</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categorias.map((category: any) => (
            <TableRow key={category._id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <td>
                <Link to={`/category/${category._id}`}>
                  <Button variant="link">Detalhes</Button>
                </Link>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
