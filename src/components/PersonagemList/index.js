import { Item, List } from "./styles";

export default function PersonagemList({ personagens }) {
  return (
    <List>
      {personagens.map((personagem) => (
        <Item key={personagem.url}>
          <p>Nome: {personagem.name}</p>
          <p>Altura: {personagem.height}cm</p>
          <p>Peso: {personagem.mass}kg</p>
          <p>Ano de Nascimento: {personagem.birth_year}</p>
        </Item>
      ))}
    </List>
  );
}
