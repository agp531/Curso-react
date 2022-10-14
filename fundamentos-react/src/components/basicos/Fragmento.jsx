import React from "react";

export default function Fragmento(props) {
    return (
        // < > sem nada, nao pode colocar propriedades
        // com o React.Fragment pode utilizar propriedades

        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </React.Fragment>
    )
}