import React from "react"

export default function ComParametro(props) {
    const status = props.Nota >= 1 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.Titulo}</h2>
            <h3>{props.Aluno}</h3> tem nota {props.Nota}
            e está {status}
        </div>
    )
}