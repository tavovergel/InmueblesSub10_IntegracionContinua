import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState("⏳ Conectando con el backend...");

  // Conexion con el back
  const API_URL = "/api";

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMensaje(data))
      .catch((err) => {
        console.error("❌ Error al conectar con el backend:", err);
        setMensaje("❌ Error al conectar con el backend");
      });
  }, [API_URL]); // dependencias

  return (
    <>
      <h1>Grupo 10 - Integración Continua</h1>
      <h3>{mensaje}</h3>
    </>
  );
}

export default App;

