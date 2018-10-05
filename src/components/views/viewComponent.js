import React from 'react'
import OtroPureComponent from '../pure/otroPureComponent'
import PureComponent from '../pure/pureComponet'

const ViewComponent = (props) => {
  return (
    <div style = {{ display: 'flex', width: '600px' }}>
      <OtroPureComponent/>
      <PureComponent/>

    </div>
  )
}

export default ViewComponent

/* <PureComponent/> renderizar el componente, usar el componente, todos los componentes
ya sea de clase o funcionales */
