import styled from 'styled-components'
import { useForm } from "react-hook-form";
import Input from '../components/Input'
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface Data {
  nome: string;
  email: string;
}

export default function Home() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: Data) => {
    console.log("=> =>", data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="nome"
          control={control}
          type="text"
          placeholder="Name"
        />
        <Input
          name="email"
          control={control}
          type="email"
          placeholder="E-mail"
        />

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  )
}
