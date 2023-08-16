import "./style.css";

function CardServico(props: any) {

    return (

        <div className="servicos">

            <div className="grupo_servicos">

                <div className="servico">
                    <div className="topo_servico">
                        <h3>{props.titulo}</h3>
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