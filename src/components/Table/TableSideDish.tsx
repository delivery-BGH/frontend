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

export default function TableSideDish() {
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [valuePesquisa, setValuePesquisa] = useState("")

  useEffect(() => {
    getSideDish();
  }, []);

  const getSideDish = async () => {
    try {
      axios.get("http://localhost:3000/sideDish").then((res) => {
        setAcompanhamentos(res.data);
      });
    } catch (error) {
      alert("Não foi possível buscar categorias :(");
      console.log(error);
    }
  };

  const submitPesquisaSideDish = () => {
    axios.get(`http://localhost:3000/sideDish/sideDish/query?filter=${valuePesquisa}`)
     .then((res) => {
        console.log(res.data)
        setAcompanhamentos(res.data)
     })
     .catch((err) => {
        console.log(`Não foi possível buscar Acompanhamento ${err}`)
     })
  }

  const limpaPesquisa = () => {
    getSideDish()
    setValuePesquisa("")
  }
  return (
    <div>
    <div className="flex flex-row gap-2">
      <Input type="text" placeholder="Pesquise por nome" className="w-1/3" value={valuePesquisa} onChange={(ev) => setValuePesquisa(ev.target.value)}/>
      <button
      onClick={submitPesquisaSideDish}
      className="bg-blue-500 rounded-lg text-lg p-1 hover:bg-slate-700"
    >Pesquisar</button>
    <button
      onClick={limpaPesquisa}
      className="bg-rose-600 rounded-lg text-lg p-1 hover:bg-slate-700"
    >Limpar</button>
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Disponível</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {acompanhamentos.map((sideDish: any) => (
          <TableRow key={sideDish._id}>
            
            <TableCell>{sideDish.name}</TableCell>
            <TableCell>{sideDish.description}</TableCell>
            <TableCell>{sideDish.price}</TableCell>
            <TableCell>{sideDish.avaliable ? "sim" : "Não"}</TableCell>
            <td>
              <Link to={`/sideDish/${sideDish._id}`}><Button variant="link">Detalhes</Button></Link>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
