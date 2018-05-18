import React, { Component } from 'react'

class Demos extends Component {
  render() {
  	return (
      <div>
       <form>
          <div>
            <p>Email</p>
          </div>
          <div>
            <input type="text" name="name" />
          </div>
          <div>
            <p>Password</p>
          </div>
          <div>
            <input type="password" name="password" />
          </div>
          <div>
             <input type="submit" value="Submit" />
          </div>  
        </form>
      </div>
  	);
  }
}

export default Demos;
