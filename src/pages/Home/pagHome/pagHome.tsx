import Carosel from "@/components/Carousel/CarouselHome/Carousel";


export const PagHome = () => {
  return (
    <>
      <header className="flex flex-row justify-between p-4">
        <h2>Logo</h2>
        <nav className="flex gap-2">
          <a href="">Inicio</a>
          <a href="">Cardápio</a>
          <a href="">Sobre</a>
          <a href="">Localização</a>
        </nav>
      </header>
      <section className="bg-white">
        <Carosel />
       
      </section>
    </>
  );
};
