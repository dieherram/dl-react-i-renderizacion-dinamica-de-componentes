
const Listado = ({ baseColaboradores }) => {
  return (
    <div className="listado-container">
      <table className="table table-striped text-center border">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          {baseColaboradores.map(colaborador =>
          (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Listado