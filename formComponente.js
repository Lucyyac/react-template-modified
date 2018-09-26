import React from 'react'

export default class FormComponent extends React.Component{

  state = {
    value1: 0,
    value2: 0
  }

  input1
  input2
  //variables q contienen referencias

  getReference1 = (ref) => {
    this.input1 = ref
  }

  getReference2 = (ref) => {
    this.input2 = ref
  }

  render(){
    return(
      <div>
        <input ref={this.getReference1} onChange={ () => {
          this.setState({
            value1: Number.parseInt(this.input1.value)
          })
        }}/>
        <input ref={this.getReference2} onChange={ () => {
          this.setState({
            value2: Number.parseInt(this.input2.value)
          })
        }}/>
        <p>{this.state.value1 + this.state.value2}</p>
      </div>
      //state value2: Number.parseInt *pasar a num* (this.input2.value) referencia al input y su propiedad q contiene el valor de la referencia
      //{this.state.value1 + this.state.value2} state.value1 leer estado, this variable de clase
      //referencias usar en formulario, boton, input, label, textarea, form
    )
  }
}