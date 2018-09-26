import React from 'react'

const OtroComponente = (props) => {

  let array = [{
    nombre: 'Roel',
    apellidos: 'Mendoza A'
  },{
    nombre: 'Roel',
    apellidos: 'Mendoza A'
  },
  {
    nombre: 'Roel',
    apellidos: 'Mendoza A'
  }]
  let userArray = array.map((obj, index) => {
    return(<User nombre={obj.nombre} apellidos={obj.apellidos} key={index}/>)
  })
  return ( // Se puede usar el operador ternario "?" adentro de las llaves "{}" que funciona como una expresion
  //No se pueden usar estructuras de control como if, for, while, switch, etc. SOLO EXPRESIONES adentro de las llaves "{}"
    <div>
      {userArray}
    </div>
    //{props.componente ? <Componente1/>: <Componente2/>}
  )
}

const User = (props) => (
  <div>
    <h1>{props.nombre}</h1>
    <h2>{props.apellidos}</h2>
  </div>
)

const Componente1 = () => (
  <div>
    <h1>Componente1</h1>
  </div>
)

const Componente2 = () => (<div>
  <h1>Componente2</h1>
</div>)

const Componente3 = () => (<div>
  <h1>Componente3</h1>
</div>)

export { OtroComponente as default }