import { useState } from "react";
import Tarjeta from "../componentes/Tarjeta";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";

function Productos() {
    const [mostrar, setMostrar] = useState(false);

    function cerrarModal() {
        setMostrar(false);
    }

    function mostrarModal() {
        setMostrar(true);
    }

    return (
        <main>
            <h1>Productos</h1>
            <Tarjeta
                imagen="/hamburguesa.jpg"
                titulo="Hamburguesa"
                descripcion="Incluye papas y refresco"
            >
                <Boton onClick={mostrarModal}>Abrir modal</Boton>
            </Tarjeta>

            {mostrar && (
                <Modal>
                    <h2>Hamburguesa</h2>
                    <p>Incluye papas y refresco.</p>
                    <Boton onClick={cerrarModal}>Cerrar</Boton>
                </Modal>
            )}
        </main>
    )
}

export default Productos;
