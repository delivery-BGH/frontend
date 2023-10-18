interface Props {
  titulo: string;
}
export default function TituloPagina({ titulo }: Props) {
  return (
    <div className="bg-tertiary text-primary font-semibold px-xl py-4xs rounded-full text-center">
      {titulo}
    </div>
  );
}
