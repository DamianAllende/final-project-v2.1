import React, { Component } from 'react'
import request from 'superagent'
import { 
LineChart, 
Line, 
CartesianGrid, 
XAxis, 
YAxis, 
Tooltip,
BarChart,
Legend,
Bar,
PieChart,
Pie
 } from 'recharts';

 import ListaActualizar from './ListaActualizar'




const API_URL = 'http://localhost:3000'

class ReportePagos extends Component {

constructor(){
      super()
      this.state = {
        pagos: [],
        ventas: []
      }
    }

componentDidMount() {
 
      request
          .get(`${API_URL}/api/pagos`)
          .then((data) => {
            this.setState({
              pagos: data.body
            })

            request
              .get(`${API_URL}/api/ventas`)
              .then((data) => {
                this.setState({
                  ventas: data.body
                })
              })
              .catch(function(e) {
                console.log(e)
              })




          })
          .catch(function(e) {
            console.log(e)
          })

}




actualizarVenta = (elementId) => {
      request
        .put(`${API_URL}/api/ventas/${elementId}`)
        .send({
          tipo_pago: "efectivo"
        })
        .then((datas) => {
          
           request
          .get(`${API_URL}/api/ventas`)
          .then((data) => {
            this.setState({
              ventas: data.body
            })
                  request
                .get(`${API_URL}/api/pagos`)
                .then((data) => {
                  this.setState({
                    pagos: data.body
                  })
                })
                .catch(function(e) {
                  console.log(e)
                })
          })
          .catch(function(e) {
            console.log(e)
          })
         
        })
        .catch(function(e){
          console.log(e)
        })
  }














  render() {
    console.log('this.state.ventas')
    console.log(this.state.ventas)
    
    let listaActualiza = this.state.ventas.filter(item => item.tipo_pago === "credito")
  	return (
        <div>
          <div className='contenedor__card'>
            <div className='form__separador'>
              <h1 className='form__titulo tv'>Tipo Pagos</h1>
            </div>
            <BarChart width={600} height={300} data={this.state.pagos}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tipo_pago"  />
              <YAxis  />
              <Tooltip/>
              <Legend />
              <Bar stackId="" dataKey="cantidad"  fill="#A416E0 "/>
            </BarChart>
          </div>







          <div>
          
          <div className='container__tabla'>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Crédito</th>
                </tr>
              </thead>
            <tbody> 

              { listaActualiza.slice(0).reverse().map((items, i) =>{
              return<ListaActualizar key={items.id} id={items.id} producto={items.producto} cantidad={items.cantidad}  cliente={items.cliente}  fn={ this.actualizarVenta } />
              // return <ListaProductos cliente={items} fn={this.borrarItem} posicion={idArray} />
              })
            }
            </tbody> 
            </table>
          </div>

        </div>










        </div>
            
  	);
  }
}

export default ReportePagos;
