import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate()

  const goToPage1 = () => navigate('/page1');
  const goToPage2 = () => navigate('/page2');
  const goToPage3 = () => navigate('/page3');


  return (
    <div>
      <h1>Pagina HomePage</h1>

      <button onClick={goToPage1}>Pagina 1</button>
      <button onClick={goToPage2}>Pagina 2</button>
      <button onClick={goToPage3}>Pagina 3</button>
    </div>
  )
}

export default HomePage;