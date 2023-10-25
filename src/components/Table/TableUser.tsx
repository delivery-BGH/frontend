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

export default function TableUser() {
  const [users, setUsers] = useState([]);
  const [valuePesquisa, setValuePesquisa] = useState("")

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      axios.get("http://localhost:3000/user").then((res) => {
        setUsers(res.data);
      });
    } catch (error) {
      alert("Não foi possível carregar usuárias");
    }
  };

  const submitPesquisaUsers = () => {
    axios.get(`http://localhost:3000/user/user/query?filter=${valuePesquisa}`)
     .then((res) => {
        console.log(res.data)
        setUsers(res.data)
     })
     .catch((err) => {
        console.log(`Não foi possível buscar produto ${err}`)
     })
  }

  const limpaPesquisa = () => {
    getUser()
    setValuePesquisa("")
  }

  return (
    <div>
      <div className="flex flex-row gap-2">
        <Input type="text" placeholder="Pesquise por nome" className="w-1/3" value={valuePesquisa} onChange={(ev) => setValuePesquisa(ev.target.value)}/>
        <button
        onClick={submitPesquisaUsers}
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
          <TableHead>E-mail</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead>Celular</TableHead>
          <TableHead>CEP</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead>Bairro</TableHead>
          <TableHead>Rua</TableHead>
          <TableHead>Numero</TableHead>
          
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: any) => (
          <TableRow key={user._id}>
            
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            
            <TableCell>{user.document}</TableCell>
            <TableCell>{user.phoneNumber}</TableCell>
            <TableCell>{user.zipCode}</TableCell>
            <TableCell>{user.city}</TableCell>
            <TableCell>{user.neighborhood}</TableCell>
            <TableCell>{user.street}</TableCell>
            <TableCell>{user.number}</TableCell>
            
            <td>
              <Link to={`/user/${user._id}`}><Button variant="link">Detalhes</Button></Link>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
