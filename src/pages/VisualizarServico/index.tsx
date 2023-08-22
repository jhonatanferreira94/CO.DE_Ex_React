//estilização
import "./style.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//axios
import api from "../../utils/api";


function VisualizarServico() {

    const { idServicos } = useParams();

    const [nome, setNome] = useState<string>("");
    const [proposta, setProposta] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaSkills, setListaSkills] = useState<string[]>([]);

    function buscarServicosPorID() {
        //estrutura basica para consumir API
        api.get("servicos/" + idServicos)
            .then((response: any) => {
                console.log(response);

                //seta os valores referente as informações do usuario
                setNome(response.data.nome);
                setProposta(response.data.valor);
                setDescricao(response.data.descricao);
                setListaSkills(response.data.techs);

            })
            .catch((error: any) => console.log(error))
    }

    useEffect(() => {
        buscarServicosPorID();
    }, []);

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço - {nome}</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{proposta}</span>
                    </div>
                    <p>{descricao}</p>
                    
                    <div className="techs">
                        {
                            listaSkills.map((tech: string, index: number) => {
                                return <span key={index}>{tech}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;