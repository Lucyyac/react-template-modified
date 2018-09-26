/*import React from 'react'  
export class MiPrimerComponente extends React.Component {
render --renderizar componente incluyen funcionalidad (while for)
	render() {
		return (
			<div >
				<h1>Mi primer componete shido</h1>
			</div>
		)
	}
}*/

import React from 'react'
//Para importar clase react de la libreria
const MiPrimerComponente = (props) => { //Propiedades del nodo padre(parametros) q recibe la funcion
	//es una Funcion que renderiza con parametros 
	return (  //retornando objeto jsx
		//jsx sintax
		<div >
			<h1>{props.texto}</h1>
			<button onClick={props.botonFuncion}>Haz algo</button> 
		</div>
	)
}//onClick={props.botonFuncion}  {para variables} atributos etiqueta buton

export { MiPrimerComponente as default }