import { useState } from "react";

import Header from "./components/Header";
import Tabela from "./components/Tabela";
import Resultado from "./components/Resultado";

function App() {

  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState();

  const [resultado, setResultado] = useState(NaN);

  function calculaIMC() {
    const formulaIMC = peso / (altura * altura)
    setResultado(formulaIMC)
  }

  return (
    <>
      <Header />

      <div className="container">
        <form className='formImc'>
          <div className='inputContainer'>
            <label htmlFor="altura">Altura <span className='exampleLabel'>(ex.: 1,70)</span></label>
            <input type="number" id="altura" placeholder="Metros" onBlur={e => setAltura(Number(e.target.value))} />
            <button className="btnCalc" type='button' onClick={calculaIMC}>Calcular</button>
          </div>
          <div className='inputContainer'>
            <label htmlFor="peso">Peso <span className='exampleLabel'>(ex.: 69,5)</span></label>
            <input type="number" id="peso" placeholder="Quilo" onBlur={e => setPeso(Number(e.target.value))} />
          </div>
        </form>
      </div>

      <Tabela resultado={resultado}/>
      <Resultado resultado={Number(resultado).toFixed(2)} />
    </>
  )
}

export default App
