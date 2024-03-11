import { useState } from "react";
const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  function validarInicioSesion() {
    if (getUsuario == "Jaime" && getContrasena == "1234") {
      console.log("Inicio de sesión correcta");
    } else {
        console.log('Error de credenciales')
    }
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
      <button onClick={validarInicioSesion} type="button">Iniciar Sesión</button>
    </form>
  );
};
export default Login;
