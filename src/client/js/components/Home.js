import React, { Component } from 'react'

import Menu from './Menu';



class Home extends Component {
  
 
  render() {
  
    
  	return (
       <div className='head__container'>
          <h1 className='titulo__componente'>Sistema de Gestión - Ventas</h1>
          <Menu />
        </div>
  	);
  }
}



export default Home;