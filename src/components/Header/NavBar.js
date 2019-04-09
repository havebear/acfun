import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
      return (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/article">文章区</Link></li>
            </ul>
        </div>
      );
    }
  }
  
  export default NavBar;
