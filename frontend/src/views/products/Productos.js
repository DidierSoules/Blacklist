import React from 'react';
//import {Link} from 'react-router-dom';
import './Productos.css';
import Producto from './../../common/producto/Producto';

class Productos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="body">
        <div className="main-container">
          <div className="row">
            <div className="col-xs-7 col-sm-9 col-md-10">
              <Producto />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productos;