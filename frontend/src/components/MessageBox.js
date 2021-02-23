import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant||'info'}`}>
          {props.children} {/*muestra el contenido de MessageBox en el lugar que ue usado, pusiste enn Homescreen como children para lo Messagebox lo de error, estara aqui */}
        </div>
    )
}