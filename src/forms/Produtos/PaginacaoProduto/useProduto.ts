import { useApi } from "@/services/deliveryInstance";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
    _id: string;
    name: string,
    price: number;
    description: string;
    url: string;
    promotionalPrice: number,
    category: string;
    activePromotion: boolean;
    avaliable: boolean
}

export default function useProduct() {
    const [produtos, setProdutos] = useState<Product[]>([])
    const { deliveryInstance } = useApi()
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(10)
    const [valuePesquisa, setValuePesquisa] = useState("");
  
        
useEffect(() => {
    getProdutos()
}, [page, limit])

const getProdutos = () =>{
    deliveryInstance
    .get(`http://localhost:3000/product/product/query?page=${page}&limit=${limit}`)
    .then((res) => {
        setProdutos(res.data)
        console.log(res.config)
    })
    .catch((err) => {
        console.log(err)
    })
}

const submitPesquisa = () => {
    deliveryInstance
      .get(
        `http://localhost:3000/product/product/query?filter=${valuePesquisa}&limit=${limit}`
      )
      .then((res) => {
        console.log(res.data);
        setProdutos(res.data);
      })
      .catch((err) => {
        console.log(`Não foi possível buscar produto ${err}`);
      });
  };

  const limpaPesquisa = () => {  
    getProdutos()
    setValuePesquisa("");
    
  };

        
    
    return { produtos, page, setPage, limit , setLimit, valuePesquisa, setValuePesquisa, submitPesquisa, limpaPesquisa }

}