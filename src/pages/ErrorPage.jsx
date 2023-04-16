import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.scss'

function ErrorPage() {
  return (
    <section className='error_container'>
    
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <div><Link to="/">Retourner sur la page d'accueil.</Link></div>

      </section>
  );
}

export default ErrorPage;