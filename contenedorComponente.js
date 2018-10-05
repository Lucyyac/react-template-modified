import React from 'react'
import MiPrimerComponente from './miPrimerComponente'
import MiSegundoComponente from './segundoComponente'
//agregar componentes
import ApiComponent from './apiComponent'
import OtroComponente from './otroComponente'
import FormComponent from './formComponente'
import ActionComponent from './src/components/actions/actionComponent'
import ViewComponent from './src/components/views/viewComponent'
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
        <ViewComponent/>
      </div>
      //<OtroComponente componente = 'True'/>  para elegir componente 1 o 2
    )
  }
}