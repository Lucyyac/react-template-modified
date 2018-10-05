import React from 'react'
import ViewComponent from '../views/viewComponent'

class ActionComponent extends React.Component {
  state={ // estado con parametros iniciales (name, apellido)
    name: 'Eduardo',
    apellidos: 'Mendoza'
  }

  changeText () { /* metodo q nosotros hicimos */
    this.setState({ /* metodo para cambiar el estado setState, con este metodo puedes cambiar los parametros iniciales */
      name: 'Roel',
      apellidos: 'Aguilar'
    })
  }

  render () {
    return (
      <div>
        <ViewComponent onButtonClick={() => {
          this.changeText()
        }} name={this.state.name} apellidos={this.state.apellidos}/>
      </div>
    )
  }
}

export default ActionComponent
/* las funciones no pueden extender de otra funcion, las clases tienen
q extender de react.component porq tiene q implentar metodos
class ActionComponent extends React.Component */
