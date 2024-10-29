import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdicionarFalta from './components/AdicionarFalta'
import MostrarFaltas  from './components/MostrarFaltas'
import DADOS from './components/data'

function App() {

  const [dados, setDados] = useState(DADOS)
  console.log(...dados)

  const addFaltasHandler = (novaFalta) => {
    setDados( (prevState) => {
      return [novaFalta, ...prevState]
    } )
  }

  return (
    <>
      <AdicionarFalta adicionarFalta={addFaltasHandler} />
      <MostrarFaltas dadosFaltas={dados}/>
    </>
  )
}

export default App
