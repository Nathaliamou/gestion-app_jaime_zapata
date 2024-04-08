import { useState } from "react";
import { usuarios } from "../../database/dataBase.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const redireccion = useNavigate();

  function validarInicioSesion() {
    if (buscarUsuario()) {
      console.log("Inicio de sesión correcta");
      redireccion("/home");
    } else {
      console.log("Error de credenciales");
    }
  }
  function buscarUsuario() {
    return usuarios.some((usuario) => usuario.user === getUsuario);
  }
  return (
    <form>
      <div className="container fadeInAnimation">
        <h2>Iniciar Sesión</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
          />
        </div>
        <section className="botones">
          <button onClick={validarInicioSesion} type="button" className="btn">
            Iniciar Sesión
          </button>
          <Link to={"/registro"} className="btn">
            Crear cuenta
          </Link>
        </section>
      </div>
    </form>
  );
};
export default Login;
