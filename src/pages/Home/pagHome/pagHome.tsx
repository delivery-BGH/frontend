import Carosel from "@/components/Carousel/CarouselHome/Carousel";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
export const PagHome = () => {
  return (
    <>
      <header className="flex flex-row justify-between p-4">
        <h2>Logo</h2>
        <nav className="flex gap-3 flex-row">
          <a className="text-base" href="">Inicio</a>
          <a className="text-base" href="">Cardápio</a>
          <a className="text-base" href="">Sobre</a>
          <a className="text-base" href="">Localização</a>
          <a className="text-base mt-1" href=""><FaCartShopping /></a>
          <a className="text-base mt-1" href=""><FaRegUser/></a>
          <a className="text-base mt-0" href="">Entrar</a>

        </nav>
      </header>
      <section className="bg-white">
        <Carosel />

       
      </section>
    </>
  );
};
