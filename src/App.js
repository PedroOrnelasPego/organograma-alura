import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

function App() {
  const [calaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores({...calaboradores, colaborador})
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
