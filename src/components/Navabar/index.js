import { Header, Link, Nav } from "./styles";

export default function Navbar() {
  return (
    <Header>
      <Link to="/">
        <h1>🌌🔎 Star Explorer </h1>
      </Link>
      <Nav>
        <Link to="/personagens">Personagens</Link>
        <Link to="/login">Login</Link>
      </Nav>
    </Header>
  );
}
