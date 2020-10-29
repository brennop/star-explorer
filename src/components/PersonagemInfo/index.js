import { Container } from "./styles";

function getGender(gender) {
  if (gender === "male") return "♂️";
  if (gender === "female") return "♀️";
  return "🤷";
}

export default function PersonagemInfo({
  name,
  height,
  mass,
  birth_year,
  gender,
}) {
  return (
    <Container>
      <ul>
        <li>Nome: {name}</li>
        <li>Altura: {height}cm</li>
        <li>Peso: {mass}kg</li>
        <li>Ano de Nascimento: {birth_year}</li>
        <li>Gênero: {getGender(gender)}</li>
      </ul>
    </Container>
  );
}
