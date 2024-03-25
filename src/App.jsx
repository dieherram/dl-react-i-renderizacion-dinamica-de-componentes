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
  const [busqueda, setBusqueda] = useState("")

  const handleChange = (e) => {
    let value = e.target.value
    setBusqueda(value)
  }

  const colaboradoresFiltrados = baseColaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(busqueda.toLowerCase())
    ) {
      return true
    }
    return false
  })

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <h1 className="mb-0">Lista de colaboradores</h1>
            <Buscador baseColaboradores={baseColaboradores} setBaseColaboradores={setBaseColaboradores} busqueda={busqueda} setBusqueda={setBusqueda} handleChange={handleChange} />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Listado baseColaboradores={colaboradoresFiltrados} busqueda={busqueda} />
            </div>
            <div className="col-md-3">
              <Formulario baseColaboradores={baseColaboradores} setBaseColaboradores={setBaseColaboradores} setAlert={setAlert} alert={alert} />
              {alert.error && <Alert alert={alert} />}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
