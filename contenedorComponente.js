import React from 'react'
import MiPrimerComponente from './miPrimerComponente'
import MiSegundoComponente from './segundoComponente'
//agregar componentes
import ApiComponent from './apiComponent'
import OtroComponente from './otroComponente'
import FormComponent from './formComponente'
export default class ContenedorComponent extends React.Component {
  // extends implementar metodos de react.component

  state = {
    texto: 'Algoo'
  }

  cambiarText = () => {
    this.setState((prevState) => {
      return ({
        texto: prevState.texto + 'MAS TEXTO'
      })
    })
  }

  render() {
    return (
      <div>
        <FormComponent/>
      </div>
      //<OtroComponente componente = 'True'/>  para elegir componente 1 o 2
    )
  }
}