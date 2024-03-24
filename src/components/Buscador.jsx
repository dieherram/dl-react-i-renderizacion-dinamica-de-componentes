import { useState } from "react"

const Buscador = ({ baseColaboradores, setBaseColaboradores }) => {

  const [busqueda, setBusqueda] = useState("")

  const handleChange = (e) => {
    let value = e.target.value
    setBusqueda(value)

    let filtrados = baseColaboradores.filter(colaborador => {
      if (
        colaborador.nombre.toLowerCase().includes(value) ||
        colaborador.correo.toLowerCase().includes(value) ||
        colaborador.edad.toLowerCase().includes(value) ||
        colaborador.cargo.toLowerCase().includes(value) ||
        colaborador.telefono.toLowerCase().includes(value)
      ) {
        return colaborador
      }
    })
  }

  return (
    <div className="buscador-container">
      <input type="text" className="form-control" placeholder="Busca un colaborador" onChange={handleChange} />
    </div>
  )
}

export default Buscador