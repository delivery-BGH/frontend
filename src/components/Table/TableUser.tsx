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
              <Link to={`/user/${user._id}`}>Detalhes</Link>
            </td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
