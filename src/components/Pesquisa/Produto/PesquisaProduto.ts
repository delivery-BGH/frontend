import axios from "axios";
import { useState } from "react";

export default function PesquisaProduto(){
   const [valuePesquisa, setValuePesquisa] = useState("")

   const submitPesquisa = () => {
     axios.get(`http://localhost:3000/product/product/query?filter=${setValuePesquisa}`)
     .then((res) => {
        console.log(res)
        
     })
     .catch((err) => {
        console.log(`Não foi possível buscar produto ${err}`)
     })
   }

   return {valuePesquisa, setValuePesquisa, submitPesquisa}
}