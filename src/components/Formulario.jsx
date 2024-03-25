import { useState } from "react"

const Formulario = ({ baseColaboradores, setBaseColaboradores, setAlert }) => {

  const [colaborador, setColaborador] = useState({ id: "", nombre: "", correo: "", edad: "", cargo: "", telefono: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador(prevColaborador => ({
      ...prevColaborador,
      [name]: value
    }));
  }

  const limpiarInputs = () => {
    setColaborador({ id: "", nombre: "", correo: "", edad: "", cargo: "", telefono: "" })
  }

  const enviarFormulario = (e) => {
    e.preventDefault()

    if (colaborador.nombre === "" || colaborador.correo === "" || colaborador.edad === "" || colaborador.cargo === "" || colaborador.telefono === "") {
      setAlert({ error: true, msj: "Completa todos los campos !", color: "danger" })
      return
    } else {
      setBaseColaboradores([...baseColaboradores, { id: Date.now(), nombre: colaborador.nombre, correo: colaborador.correo, edad: colaborador.edad, cargo: colaborador.cargo, telefono: colaborador.telefono }])
      setAlert({ error: true, msj: "Colaborador agregado !", color: "success" })
      limpiarInputs()
    }
  }


  return (
    <div className="formulario-container">
      <form onSubmit={enviarFormulario}>
        <h2>Agregar colaborador</h2>
        <div className="mb-3">
          <input type="text" className="form-control" name="nombre" placeholder="Nombre del colaborador" value={colaborador.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="correo" placeholder="Email del colaborador" value={colaborador.correo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="edad" placeholder="Edad del colaborador" value={colaborador.edad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="cargo" placeholder="Cargo del colaborador" value={colaborador.cargo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="telefono" placeholder="Teléfono del colaborador" value={colaborador.telefono} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Agregar colaborador</button>
      </form>
    </div>
  )
}

export default Formulario