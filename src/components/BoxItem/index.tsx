
interface Props {
  children?: JSX.Element;
}

export default function BoxItem({ children }: Props) {
  return (
    <div className="
      border-2 border-dotted border-tertiary rounded-3xl 
      w-24 h-24 
      flex items-center justify-center 
      text-center font-bold text-sm
      p-1
    ">
      {children}
    </div>
  )
}
