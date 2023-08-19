import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/'

//estilizacao global
import "./index.css";



//rotas
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ListaServicos from './pages/ListaServicos';
import Header from './components/Header';
import ListaDevs from './pages/ListaDevs';
import Perfil from "./pages/PerfilUsuario";
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicacao tera rotas*/}
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='lista/devs' element={<ListaDevs />} />
        <Route path='perfil/:idUsuario' element={<Perfil />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)