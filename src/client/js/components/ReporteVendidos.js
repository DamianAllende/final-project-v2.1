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
Bar
 } from 'recharts';

const API_URL = 'http://localhost:3000'

class ReportePagos extends Component {

constructor(){
      super()
      this.state = {
        vendidos: []
      }
    }

componentDidMount() {
 
      request
          .get(`${API_URL}/api/vendidos`)
          .then((data) => {
            this.setState({
              vendidos: data.body
            })
          })
          .catch(function(e) {
            console.log(e)
          })

}




  render() {
  	return (
        <div>
          <div className='contenedor__card'>
            <div className='form__separador'>
              <h1 className='form__titulo tv'>Productos Vendidos</h1>
            </div>
            <BarChart width={600} height={300} data={this.state.vendidos}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="producto"  />
              <YAxis  />
              <Tooltip/>
              <Legend />
              <Bar stackId="" dataKey="cantidad"  fill="#8884d8"  />
            </BarChart>
          </div>
        </div>
            
  	);
  }
}

export default ReportePagos;
