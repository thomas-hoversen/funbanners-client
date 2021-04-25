import React, { Component } from 'react';
import '../style/header.css';
import { Link, withRouter } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            show: ""
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
      this.setState({
          collapse: !this.state.collapse,
          show: this.state.collapse ? "show" : ""
      });
  }

    render() {
      return (
        <div className="navigation">
          <nav class="navbar navbar-expand-md ">
            <div class="container">
              <div class="head-component">
                <Link class="navbar-brand" to="/">
                  Fun Banners
                </Link>
                
                  <ul class="navbar-nav ml-auto">
                    <li
                      class={`nav-item  ${
                        this.props.location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link class="nav-link" to="/purpose" onClick={this.onClick} >
                        What's this for?
                        <span class="sr-only"></span>
                      </Link>
                    </li>
                    <li
                      class={`nav-item  ${
                        this.props.location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link class="nav-link" to="/specs" onClick={this.onClick}>
                        Website Specs
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }
    
  }
  
export default withRouter(Header);
