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

export default function TableUser() {
  const [users, setUsers] = useState([]);

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
        {users.map((user: any) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>{user.cpf}</TableCell>
            <TableCell>{user.celular}</TableCell>
            <TableCell>{user.cep}</TableCell>
            <TableCell>{user.cidade}</TableCell>
            <TableCell>{user.bairro}</TableCell>
            <TableCell>{user.rua}</TableCell>
            <td>
              <Link to={`/user/${user._id}`}>Detalhes</Link>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
