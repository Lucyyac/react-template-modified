import React from 'react'

export default class ApiComponent extends React.Component{

  state = {
    cosa: "cambio"
  }

  cambioCosa = () => {
    this.setState((anteState)=> {
      return({
        cosa: anteState.cosa + "Estoy cambiando"
      })
    })
  }

  render (){
    setInterval(this.cambioCosa, 5000)
    return (
      <div>
        <h1>{this.state.cosa}</h1>
      </div>
    )
  }
}

