import './App.css'
import React, { useState } from 'react'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alert from './components/Alert'
import { BaseColaboradores } from './BaseColaboradores'

function App() {

  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ error: false, msj: "", color: "" })

  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Buscador baseColaboradores={baseColaboradores} setBaseColaboradores={setBaseColaboradores} />
      <Listado baseColaboradores={baseColaboradores} />
      <Formulario baseColaboradores={baseColaboradores} setBaseColaboradores={setBaseColaboradores} setAlert={setAlert} />
      {alert.error ? <Alert alert={alert} /> : null}
    </>
  )
}

export default App
