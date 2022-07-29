import './App.css';
import React, {useState} from "react"

alert(2);
function MiApp() {
const [correoE, setCorreoE] = useState("Correo Vacio");
function handleCorreo(e) {
setCorreoE(e.target.value);
window.miGlobal = e.target.value;
}  
  return (
    <div className="MiApp"> 
      <div>
        <h1> Hooks y eventos </h1>
        <input type="email" value={correoE} onChange={handleCorreo}/>       
      </div>
    </div>
  );
}
console.log(window.miGlobal);
export default MiApp;
