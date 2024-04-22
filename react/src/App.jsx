import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Componentes/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
