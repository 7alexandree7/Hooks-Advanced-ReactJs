// src/components/LoginPage.js
import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();


  const handleLogin = () => {
    auth.login();
    console.log('Login button clicked');
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
