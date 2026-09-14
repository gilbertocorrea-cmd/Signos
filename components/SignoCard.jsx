// recebendo o objeto props
export default function SignoCard(props){
    return(
        <div className="signo-card">
            <h2>{props.signo}</h2>
            <img src={props.imagem} alt={props.signo} />
            <p>
                {props.dataInicio} - {props.dataFim}
            </p>
        </div>
    )
}
