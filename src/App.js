import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navabar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Personagem from "./pages/Personagem";
import Personagens from "./pages/Personagens";
import { Layout } from "./pages/styles";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/personagens" exact>
          <Personagens />
        </Route>
        <Route path="/personagens/:id">
          <Personagem />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Layout>
    </Router>
  );
}

export default App;
