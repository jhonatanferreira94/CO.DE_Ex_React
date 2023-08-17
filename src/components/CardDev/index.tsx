//estilizacao

import "./style.css";

function CardDev(props: any) {
    return (

        <div className="dev">
            <div className="grupo_contato">
                <img src={"http://localhost:3000/static/" + props.foto} alt="" />
                <div className="contato_dev">
                    <h3>{props.nome}</h3>
                    <p>{props.email}</p>
                </div>
            </div>
            <div className="techs">
                {
                    props.listatechs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }
            </div>
        </div>

    )

}

export default CardDev;