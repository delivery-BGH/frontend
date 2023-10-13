import Input from "../Input/Input";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputForm = ({ ...rest }: InputProps) => {
  return (
    <div>
      <Input className="bg-background" {...rest} />
    </div>
  );
};

export default InputForm;
