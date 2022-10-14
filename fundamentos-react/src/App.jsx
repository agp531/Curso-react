import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 -Desafio Aleatorio">
            <Aleatorio min={10} max={60}></Aleatorio>
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro">
            <ComParametro
                Titulo="Situação do Aluno"
                Aluno="Allan"
                Nota={9.4}>
            </ComParametro>
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>