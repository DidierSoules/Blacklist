import React from 'react';
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <div className="header">
        <div className="header-content">
            <div className="logo-container">
                <a href="/products" className="logo">
                    <img src="//dj4i04i24axgu.cloudfront.net/normi/statics/0.2.72/garbarino/images/logo-garbarino.svg" alt="Garbarino"/>
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
