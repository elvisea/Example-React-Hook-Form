import { ButtonHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
};

export default Button;
