import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  

  return (
    <AuthProvider>
      <Outlet />
      <Router>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
         {/* Rotas protegidas */}
         <Route path='/' element={<PrivateRoute> <HomePage/> </PrivateRoute>}/>
         <Route path='page1' element={<PrivateRoute> <Page1/> </PrivateRoute>}/>
         <Route path='page2' element={<PrivateRoute> <Page2/> </PrivateRoute>}/>
         <Route path='page3' element={<PrivateRoute> <Page3/> </PrivateRoute>}/>
          {/* Rotas protegidas */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
