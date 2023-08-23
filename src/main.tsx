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
import VisualizarServico from './pages/VisualizarServico';
import CadastroUsuario from './pages/CadastroUsuario';



ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicacao tera rotas*/}
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='lista/devs' element={<ListaDevs />} />
        <Route path='perfil/:idUsuario' element={<Perfil />} />
        <Route path='servicos/:idServicos' element={<VisualizarServico />} />
        <Route path='cadastro/usuario' element={<CadastroUsuario />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)