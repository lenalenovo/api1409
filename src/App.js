import { useState } from "react";
import Login from "./paginas/Login/Login";
import Rotas from "./rotas/Rotas";

function App() {

  const [news, setNews] = useState([])
  return (
    <>
    <Rotas news={news} setNews={setNews}/>
    </>
  );
}

export default App;
