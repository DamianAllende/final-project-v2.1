import React, { Component } from 'react'
import Menu from './Menu'
import ReportePagos from './ReportePagos'
import ReporteVendidos from './ReporteVendidos'
import ActualizarPagos from './ActualizarPagos' 

import { 
LineChart, 
Line, 
CartesianGrid, 
XAxis, 
YAxis, 
Tooltip,
BarChart,
Legend,
Bar
 } from 'recharts';



class Reporte extends Component {


  render(){
  	return (
        <div>
          <div className='head__container'>
            <h1 className='titulo__componente'>Sistema de Gestión - Ventas</h1>
            <Menu />
          </div>
          <ReportePagos />
          
          <ReporteVendidos />
        </div>
            
  	);
  }
}


export default Reporte;
