import {useState} from "react";
import Boton from "../componentes/Boton.jsx";
import Modal from "../componentes/Modal.jsx";

function Preguntas() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [comentario, setComentario] = useState("");
        const [mostrar, setMostrar] = useState(false);

        const [mensaje, setMensaje] = useState("");

    function enviarFormulario(evento) {
        evento.preventDefault();
        if(nombre.trim() === "" || correo.trim() === "" || comentario.trim() === "") {
            setMensaje("Complete los campos")
        }else{
            setMensaje("Se envió correctamente")
            setMostrar(true);
            limpiarFormulario();
        }
    }
    function limpiarFormulario() {
        setNombre("");
        setCorreo("");
        setComentario("");
    }
function cerrarModal(){
    setMostrar(false);
}
    return(
        <main>
            <h1>Preguntas</h1>
            <form onSubmit={enviarFormulario}>
                <label>Nombre: </label>
                <input type="text" value={nombre} onChange={(evento) => setNombre(evento.target.value)} />
                <label>Correo: </label>
                <input type="email" value={correo} onChange={(evento) => setCorreo(evento.target.value)} />
                <label>Comentario: </label>
                <textarea value={comentario} onChange={(evento) => setComentario(evento.target.value)} />
                    <button type="submit">Enviar</button>
            </form>
          {mostrar && (
                <Modal>
                    <h2>{mensaje}</h2>
                    <Boton onClick={cerrarModal}>Cerrar</Boton>
                </Modal>
            )}
        </main>
    )
    }

    export default Preguntas;