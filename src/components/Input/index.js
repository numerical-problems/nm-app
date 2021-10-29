import { Container } from './styles';

export default function Input({ label, ...props }) {

  return (
    <Container>
      <input {...props}  />
    </Container>
  );
}