interface Props {
  text?: string;
}

export default function Divider({ text }: Props) {
  return (
    <div
      className="
        border-b-2 border-tertiary border-dotted
        font-bold
        p-2
      "
    >
      {text}
    </div>
  );
}
