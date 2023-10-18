/* eslint-disable react/react-in-jsx-scope */

interface PropDiv {
  index: number;
}

const DivWhite = ({ index }: PropDiv) => {
  switch (index) {
    case 0:
      return (
        <div
          className="
    bg-secondary 
    w-1/6 border-r-2 border-r-primary 
    last:border-r-0 last:rounded-tr-full last:rounded-br-full
    first:rounded-tl-full first:rounded-bl-full 
    "
        />
      );
    default:
      return (
        <div
          className="
        bg-secondary
        w-1/6 
        border-r-2 border-r-primary 
        last:rounded-tr-full last:rounded-br-full
        last:border-r-0
        "
        />
      );
  }
};

const DivBlack = ({ index }: PropDiv) => {
  switch (index) {
    case 6:
      return (
        <div
          className="
        bg-tertiary
        w-1/6
        last:rounded-tr-full last:rounded-br-full
      "
        />
      );
    default:
      return (
        <div
          className="
        bg-primary 
        w-1/6 
        first:rounded-tl-full first:rounded-bl-full
      "
        />
      );
  }
};

export type BarraDeMedicaoProps = {
  length?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLDivElement>;

const BarraDeMedicao = ({ length = 0, className }: BarraDeMedicaoProps) => {
  const lengthBlack = new Array(length);
  const lengthWhite = new Array(6 - lengthBlack.length);

  const DivBranca: Array<{ index: number }> = [];
  for (let index = 0; index < lengthWhite.length; index++) {
    DivBranca.push({ index: index });
  }

  const DivPreta: Array<{ index: number }> = [];
  for (let index = 0; index < lengthBlack.length; index++) {
    DivPreta.push({ index: index });
  }

  return (
    <div
      className={`
      ${className}
      flex w-full 
      border-2 border-primary rounded-full
      h-3 
     `}
    >
      {DivPreta.map((_, index) => {
        return <DivBlack key={index} index={index} />;
      })}

      {DivBranca.map((_, index) => {
        return <DivWhite key={index} index={index} />;
      })}
    </div>
  );
};

export default BarraDeMedicao;
