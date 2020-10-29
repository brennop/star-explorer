import { useEffect, useState } from "react";
import PersonagemList from "../components/PersonagemList";
import axios from "axios";

export default function Personagens({ page }) {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => response.data)
      .then((data) => setPersonagens(data.results));
  }, []);

  return <PersonagemList personagens={personagens} />;
}
