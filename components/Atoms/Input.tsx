interface Props {
  type?: 'text' | 'tel' | 'email';
  id: string;
  placeholder: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({ type = 'text', id, placeholder, required = false, onChange}: Props) => {
  return  <input className="flex py-2 px-4 w-full bg-white/70 placeholder:italic"onChange={onChange} type={type} id={id} name={id} placeholder={placeholder} required={required} />
}

export default TextInput;
