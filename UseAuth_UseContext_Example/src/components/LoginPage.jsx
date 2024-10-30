// src/components/LoginPage.js
import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();


    const handleLogin = (event) => {
        event.preventDefault()
        auth.login();
        navigate('/');
    };

    return (
        <>
        
           <div className='content_LoginPage'>
            <h2>Login</h2>
            
            <form className='form-box' onSubmit={handleLogin}>
                <div>
                    <div className='box_input'>
                        <p>Email:</p>
                        <input type="text" />
                    </div>
                    <div className='box_input'>
                        <p>Senha:</p>
                        <input type="password" />
                    </div>
                </div>

                <div>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
        </>
     
    );
}

export default LoginPage;
