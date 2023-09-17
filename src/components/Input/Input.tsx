
export type InputProps = {
  label?: string;
  multiline?: boolean;
  placeholder?: string;
} & (Input | TextArea)

type TextArea = React.HTMLAttributes<HTMLTextAreaElement>
type Input = React.InputHTMLAttributes<HTMLInputElement>

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return <textarea {...props as TextArea} />
  } else {
    return <input {...props as Input} />
  }
}

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {label && <label className={`absolute pl-1 text-xs font-bold`}>{label}</label>}
      <InputOrTextArea
        className={`
          pl-1 font-bold text-md
          border-2 border-primary
          bg-light text-gray-primary rounded-md
          outline-2
          focus:outline-double focus:outline-primary 
          disabled:bg-disabled disabled:border-2 disabled:border-disabled disabled:text-disabled
          ${label && 'pt-3'}
          ${className}
        `}
        {...rest}
      />
    </div>
  )
}

export default Input;