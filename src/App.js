import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style/style.css'


//Root_of_Equation
import Bisection from './pages/Root_of_Equation/Bisection';
import False_position from './pages/Root_of_Equation/False_position';
import Newton_raphson from './pages/Root_of_Equation/Newton_raphson';
import Onepoint from './pages/Root_of_Equation/Onepoint';
import Secant from './pages/Root_of_Equation/Secant';




const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

class App extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      'NavItemActive': ''
    }
  }

  render() {
    return (
      <Router>

        <nav className="navbar navbar-static-top">
          <ul className="nav navbar-nav">
            <span className="Navtop"> NUMERICAL MATHOD </span>
            
          </ul><p className="proname">Phakkapon Chintoo 6004062636289</p>
        </nav>

        <nav className="nav">
          <ul>
          
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                RootofEquation
                        </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item " href="/Bisection">Bisection</a></li>
                <li><a class="dropdown-item " href="/False_position">False Position</a></li>
                <li><a class="dropdown-item " href="/Newton_raphson">Newton Raphson</a></li>
                <li><a class="dropdown-item " href="/Onepoint">One point Iteration</a></li>
                <li><a class="dropdown-item " href="/Secant">Secant</a></li>
              </ul>
            </div>

            
          </ul>
        </nav>

     
          
            
       

        <Layout style={{ minHeight: "100vh" }}>
          <Layout >
            <Layout>

              <Content style={{ padding: 24, margin: 0, minHeight: 280, background: "#000000" }}>
               
                {/*Root_of_Equation*/}
                <Route path="/Bisection" component={Bisection} />
                <Route path="/False_position" component={False_position} />
                <Route path="/Newton_raphson" component={Newton_raphson} />
                <Route path="/Onepoint" component={Onepoint} />
                <Route path="/Secant" component={Secant} />
                
              </Content>

            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
