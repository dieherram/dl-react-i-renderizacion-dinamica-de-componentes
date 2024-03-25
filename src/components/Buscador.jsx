
const Buscador = ({ busqueda, handleChange }) => {
  return (
    <div className="buscador-container col-md-4 my-3">
      <input type="text" className="form-control" placeholder="Busca un colaborador" value={busqueda} onChange={handleChange} />
    </div>
  )
}

export default Buscador