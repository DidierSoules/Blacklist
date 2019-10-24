import React from 'react';
import './Producto.css';
// import { Link } from "react-router-dom";

class Producto extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        products: []
      };
    }
  
    
    async componentDidMount(){
      const url = "http://localhost:3000/products";
      const response = await fetch(url);
      const api = await response.json();
      this.setState({ products: api.data, loading: false });
    }
  
    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
  
    render() {
      if (this.state.loading) {
        return <div>Loading...</div>;
      }
  
      if (!this.state.products.length) {
        return <div>No products available.</div>;
      }

      return (
        <div className="row itemList">
            {this.state.products.map(product => (
                <div key={product._id} className="col-xs-12 col-sm-4 col-md-3">
                <div className="itemBox" onClick={() => console.log('you clicked the product')}>
                  {/* <Link to="/products/:id"> */}
                    <div className="image-container">
                    <img className='image-size' src={product.image_url} />
                    </div>
                    <div className="info-container">
                    <div className="price-container">
                        <div className="list-price">${product.list_price}</div>
                        <span className="price-discount-container">
                        <del className="price">${product.price}</del>
                        <span className="discount">{product.discount}% OFF</span>
                        </span>
                    </div>
                    <div className="title-container">
                        <h3 className="title">{product.description}</h3>
                    </div>
                    </div>
                  {/* </Link> */}
                </div>
                </div>
            ))}
        </div>
      )
    }
}

export default Producto;