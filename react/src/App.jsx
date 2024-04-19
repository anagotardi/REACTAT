import './App.css'
import Cardshome from './Componentes/Cardshome/Cardshome'
import Iniciohome from './Componentes/Iniciohome/Iniciohome'
import Iniciosobre from './Componentes/Iniciosobre/Iniciosobre'
import Navbarhome from './Componentes/Navbarhome/Navbarhome'
import { Outlet } from 'react-router-dom'
import Navbarsobre from './Componentes/Navbarsobre/Navbarsobre'
import Navbarcontato from './Componentes/Navbarcontato/Navbarcontato'
import Iniciocontato from './Componentes/Iniciocontato/Iniciocontato'
import Formulariocontato from './Componentes/Formulariocontato/Formulariocontato'

function App() {

  return (
    <>
    <Navbarhome/>
    <Iniciohome/>
    <Cardshome/>

    <Navbarsobre/>
    <Iniciosobre/>

    <Navbarcontato/>
    <Iniciocontato/>
    <Formulariocontato/>

    <Outlet/>
    </>
  )
}

export default App
