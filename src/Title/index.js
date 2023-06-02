import React from "react";
import "./Title.css";

function Title () {
    return(
        <React.Fragment>
            <div className="d1">
                <h1 className="t1">ESCUELA DE EDUCACIÓN BASICA "MUNDO FELIZ"</h1>
                <h2 className="t2">PROYECTO ACADEMICO 2023</h2>
                <div className="t3">
                    <h2 className="ache1">GAEL CABRERA</h2>
                    <h2 className="ache1">SEPTIMO"A"</h2>    
                </div>        
            </div>

            <div className="d2">
                <h2 className="h5">APLICACIÓN DE TAREAS O LISTA DE COMPRAS</h2>
            </div>
        </React.Fragment>
    )
}

export { Title };