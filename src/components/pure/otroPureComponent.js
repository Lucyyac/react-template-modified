/*eslint-disable*/
import React from 'react'

const OtroPureComponent = (props) => <div style = {{ border: 'solid black 1px', flex:1 }}>
  <button onClick={props.onClickButton}>Holi</button>
  <p>{props.text}</p>
</div>

/*const OtroPureComponent = (props) => <div style o puede ser style = {style} cuando son diferentes>
<button  onClick = {props.onClickButton}>Holi</button>
<p>{props.text</p>
</div>
let style = {border: 'solid black 1px', flex:1}
 */

export default OtroPureComponent

/*const o let son diferentes, const ya no cambia, let variable, propiedades parametro de la funcion*/
/*Siempre q   quieras usar un componente en otro archivo lo tienes q exportar
export default OtroPureComponent*/ 
/*Style es un objeto dentro con (css; border, flex) propiedades, {{}} señala q señala variable*/