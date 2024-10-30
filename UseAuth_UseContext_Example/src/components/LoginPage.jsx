// src/components/LoginPage.js
import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import '../App.css'
import { user as users } from '../data/user';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            auth.login();
            navigate('/');
        }

        else {
            setError('Email ou senha não encontrados')
        }
    };

    return (
        <>

            <div className='content_LoginPage'>
                <h2>Login</h2>
                <form className='form-box' onSubmit={(event) => event.preventDefault()}>
                    <div>
                        <div className='box_input'>
                            <p>Email:</p>
                            <input
                                type="text"
                                required
                                value={email}
                                placeholder="Digite seu Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='box_input'>
                            <p>Senha:</p>
                            <input
                                type="password"
                                required
                                value={password}
                                placeholder="Senha"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleLogin}>Entrar</button>
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
        </>

    );
}

export default LoginPage;
