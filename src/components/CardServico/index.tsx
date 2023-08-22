import "./style.css";

//rotas
import { Link } from "react-router-dom";

function CardServico(props: any) {

    return (

        <div className="servicos">

            <div className="grupo_servicos">

                <div className="servico">
                    <div className="topo_servico">

                        <Link to={"/servicos/" + props.id}>
                            <h3>{props.titulo}</h3>
                        </Link>

                        <span>{props.proposta}</span>
                    </div>
                    <p>{props.descricao}</p>
                    <div className="techs_dev">
                        {
                            props.listatechs.map((tech: string, indice: number) => {
                                return <span key={indice}>{tech}</span>
                            })
                        }
                    </div>
                </div>


            </div>
        </div>

    )

}

export default CardServico;