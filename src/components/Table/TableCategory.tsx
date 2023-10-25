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

export default function TableCategory() {
  const [categorias, setCategorias] = useState([]);
  const [valuePesquisa, setValuePesquisa] = useState("")

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

  const submitPesquisa = () => {
    axios.get(`http://localhost:3000/category/category/query?filter=${valuePesquisa}`)
     .then((res) => {
        console.log(res.data)
        setCategorias(res.data)
     })
     .catch((err) => {
        console.log(`Não foi possível buscar produto ${err}`)
     })
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categorias.map((category: any) => (
          <TableRow key={category._id}>
            <TableCell>{category._id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.description}</TableCell>
            <td>
              <Link to={`/category/${category._id}`}>Detalhes</Link>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
