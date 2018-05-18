import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


class Menu extends Component {

  render() {
  	return (
      <div  className='menu'>
        <ul className='menu__ul'>
           <li className='menu__li'>
            <Link to="/ventas" className='menu__link' >Nueva Venta</Link>
          </li>
          <li className='menu__li'>
            <Link to="/clientes" className='menu__link' >Nuevo Clientes</Link>
          </li>
          <li className='menu__li'>
             <Link to="/productos" className='menu__link' >Nuevo Productos</Link>
          </li>
          <li className='menu__li'>
            <Link to="/reportes" className='menu__link' >Reportes</Link>
          </li>
        </ul>  
      </div>
  	);
  }
}

export default Menu;