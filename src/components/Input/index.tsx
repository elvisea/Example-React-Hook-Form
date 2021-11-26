import { InputHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react';
import { Control, Controller } from 'react-hook-form';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control;
}

const Input: React.FC<InputProps> = ({ name, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <Container
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  )
}

export default Input;