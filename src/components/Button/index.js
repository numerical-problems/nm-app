import { Container } from './styles';

export default function Input({ label, ...props }) {

  return (
    <Container>
      <button {...props}>
          {label}
      </button>
    </Container>
  );
}