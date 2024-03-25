
const Alert = ({ alert }) => {
  return (
    <div className="alert-container mt-3 text-center">
      <div className={`alert alert-${alert.color}`} role="alert">
        {alert.msj}
      </div>
    </div>
  )
}

export default Alert