import React, { Component } from 'react'

class ListaActualizar extends Component {
  
  render() {
    console.log()

  	return (
      <tr>
        <td>{this.props.cliente}</td>
        <td>{this.props.producto}</td>
        <td>{this.props.cantidad}</td>
        <td> <button onClick={ () => { this.props.fn(this.props.id) }  } >Actualizar</button></td>
      </tr>
      
  	);
  }
}

export default ListaActualizar;