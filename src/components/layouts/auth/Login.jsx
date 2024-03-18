import { useState } from "react";
import { usuarios } from "../../database/dataBase.jsx";
const Login = () => {
  usuarios.some((usuario) => {
    console.log(usuario);
  });
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  function validarInicioSesion() {
    if (buscarUsuario()) {
      console.log("Inicio de sesión correcta");
    } else {
      console.log("Error de credenciales");
    }
  }
  function buscarUsuario(){
    return usuarios.some(usuario => usuario.user == getUsuario)
  }
  return (
    <form action="">
      <section>
        <input
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Usuario"
          type="text"
        />
        <input
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Contraseña"
          type="text"
        />
      </section>
      <button onClick={validarInicioSesion} type="button">
        Iniciar Sesión
      </button>
    </form>
  );
};
export default Login;
