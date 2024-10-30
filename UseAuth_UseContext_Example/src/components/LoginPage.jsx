import React from "react";
import { useAuth } from "./AuthProvider";

function LoginPage() {
    const auth = useAuth()


    const handleLogin = () => {
        // Coloque a lógica de autenticação aqui
        auth.login();
    };


    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
}


export default LoginPage

