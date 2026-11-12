import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
function iniciarSesion(evento) {
    evento.preventDefault();
    // Lógica para iniciar sesión
    setEmail('');
    setPassword('');
    navigate('/');
}
    return(
        <main className="Login">
            <div className="login-container">
                <div className="login-pestanas">
                    <button type="button" onClick={() => navigate('/')}>Home</button>
                    <button type="button" onClick={() => navigate('/preguntas')}>Preguntas</button>
                    <button type="button" onClick={() => navigate('/registro')}>Registrar</button>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>
                    <h1>Iniciar sesión</h1>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="current-password"
                        required
                    />
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </main>
    )
}
export default Login;