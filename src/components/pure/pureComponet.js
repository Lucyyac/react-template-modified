/*eslint-disable*/
import React from 'react'

const ComponentePuro = props => <div style={{
  border: 'solid black 1px',
  flex:1
}}>
  <label htmlFor='name'>Nombre:</label>
  <p id='name'>{props.name}</p>
  <br/>
  <label htmlFor='apellidos'>Apellidos:</label>
  <p id='apellidos'>{props.apellidos}</p>
  <br/>
  <button onClick={props.onButtonClick}>Mostrar detalles</button>
</div>

export default ComponentePuro
/*props puede tener otras propiedades diferentes, id para actionComponent*/
/*flex:1  si vale dos entonces toma el tamaño del primero y lo duplica*/
/*hmtlFor for de los label para relacionarlo con otra etiqueta, atributo*/