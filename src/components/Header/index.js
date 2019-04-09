import React, { Component } from 'react';
import HeaderTop from './HeaderTop'
import Banner from './Banner'
import Navbar from './NavBar'

class Header extends Component {
    render() {
      return (
        <div className="header">
          <HeaderTop></HeaderTop>
          <Banner></Banner>
          <Navbar></Navbar>
        </div>
      );
    }
  }
  
  export default Header;
