//estilizacao
import "./style.css";

//components
import CardServico from "../../components/CardServico";

//hoks
import { useEffect, useState } from "react";

//api
import api from "../../utils/api";


function ListaServicos() {

  //STATE DEVS

  const [servicos, setServicos] = useState<any[]>([]);
  const [skillDigitadaServicos, setSkillDigitadaServicos] = useState<string>("");

  //funcao onde pega o que o usuario digitou
  function verificarCampoSkillServicos(event: any) {
    if (event.target.value === "") {
      listarServicos();
    } setSkillDigitadaServicos(event.target.value);
  }

  //   function buscarDevPorSkill(event: any) {
  //     //não recarrega a pagina
  //     event.preventDefault();

  //     //filtrar devs pela skill digitada no campo buscar
  //     const devsFiltrados = devs.filter((dev: any) => dev.hardSkills.includes(skillDigitado.toLocaleUpperCase()));

  //     if (devsFiltrados.length === 0) {
  //         alert("Nenhum desenvolvedor(a) com essa skill :(")
  //     } else {
  //         //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
  //         setDevs(devsFiltrados);
  //     }

  // }

  function buscarServicosPorSkill(event: any) {
    event.preventDefault();

    const servicosFiltrados = servicos.filter((servicos: any) => servicos.techs.includes(skillDigitadaServicos.toLocaleUpperCase()));

    if (servicosFiltrados.length === 0) {
      alert("Nenhum desenvolvedor(a) com essa skill :(")
    } else {
              //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
              setServicos(servicosFiltrados);
          }
  }

  function listarServicos() {
    api.get("servicos").then((response: any) => {
      console.log(response);
      setServicos(response.data)
    })

      .catch((error: any) => {
        console.log("Erro ao realizar uma requisicao:"), error;
      })
  }

  useEffect(() => {
    //execute acao
    listarServicos();
  }, [])


  return (

    <>
      <div id="sombra"></div>


      <main id="ListaServicosMain">
        <div className="container container_lista_servicos">
          <div className="lista_servicos_conteudo">
            <h1>Lista de Serviços</h1>
            <hr />
            <form method="post" onSubmit={buscarServicosPorSkill}>
              <div className="wrapper_form">
                <label htmlFor="busca">Procurar serviços</label>
                <div className="campo-label">
                  <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={verificarCampoSkillServicos}/>
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
            <div className="wrapper_lista">
              <ul>
                {
                  servicos.map((servico: any, indice: number) => {
                    return <li key={indice}>
                      <CardServico
                        titulo={servico.nome}
                        descricao={servico.descricao}
                        proposta={servico.valor}
                        listatechs={servico.techs}

                      />
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </main>


    </>

  )
}


export default ListaServicos;