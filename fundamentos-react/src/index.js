import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>

        <ComParametro 
            Titulo="Situação do Aluno"
             Aluno = "Allan"
             Nota = {9.4}>
        </ComParametro>
    </div>,
     document.getElementById('root')
)

