import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style/style.scss'

//link_pages
//Integration
import Composite_Simpson from './pages/Integration/Composite_Simpson_Rule';
import Composite_Trapezoidal from './pages/Integration/Composite_Trapezoidal_Rule';
import Simpson from './pages/Integration/Simpson';
import Trapzoidal from './pages/Integration/Trapzoidal';
//Interpolation
import Lagrange from './pages/Interpolation/Lagrange';
import Newton_Divide_Difference from './pages/Interpolation/Newton_Divide_Difference';
import Spline from './pages/Interpolation/Spline';
//Linear_Algebra
import Cholesky from './pages/Linear_Algebra/Cholesky';
import Conjugate_Gradient from './pages/Linear_Algebra/Conjugate_Gradient';
import Cramer from './pages/Linear_Algebra/Cramer';
import Gauss_Jordan_Method from './pages/Linear_Algebra/Gauss_Jordan_Method';
import Gauss_seidel from './pages/Linear_Algebra/Gauss_seidel';
import Jacobi from './pages/Linear_Algebra/Jacobi';
import Lu from './pages/Linear_Algebra/Lu';
//Ordinary_Differential_Equation
import Euler from './pages/Ordinary_Differential_Equation/Euler';
import Fw_Diff from './pages/Ordinary_Differential_Equation/Fw_Divided_Differences';
import Heun from './pages/Ordinary_Differential_Equation/Heun';
import Modifier_Euler from './pages/Ordinary_Differential_Equation/Modifier_Euler';
//Regression
import Linear_Regression from './pages/Regression/Linear_Regression';
import Multiple_Linear_Regression from './pages/Regression/Multiple_Linear_Regression';
import Polynomial_Regression from './pages/Regression/Polynomial_Regression';
//Root_of_Equation
import Bisection from './pages/Root_of_Equation/Bisection';
import False_position from './pages/Root_of_Equation/False_position';
import Newton_raphson from './pages/Root_of_Equation/Newton_raphson';
import Onepoint from './pages/Root_of_Equation/Onepoint';
import Secant from './pages/Root_of_Equation/Secant';
//Differentiation
import Backward_Divided_Differences from './pages/Differentiation/Backward_Divided_Differences';
import Central_Divided_Differences from './pages/Differentiation/Central_Divided_Differences';
import Forward_Divided_Differences from './pages/Differentiation/Forward_Divided_Differences';

import Backward_Divided_Differences2 from './pages/Differentiation/Backward_Divided_Differences2';
import Central_Divided_Differences2 from './pages/Differentiation/Central_Divided_Differences2';
import Forward_Divided_Differences2 from './pages/Differentiation/Forward_Divided_Differences2';



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
                {/*Integration*/}
                <Route path="/Composite_Simpson" component={Composite_Simpson} />
                <Route path="/Composite_Trapezoidal" component={Composite_Trapezoidal} />
                <Route path="/Simpson" component={Simpson} />
                <Route path="/Trapzoidal" component={Trapzoidal} />
                {/*Interpolation*/}
                <Route path="/Lagrange" component={Lagrange} />
                <Route path="/Newton_Divide_Difference" component={Newton_Divide_Difference} />
                <Route path="/Spline" component={Spline} />
                {/*Linear_Algebra*/}
                <Route path="/Cholesky" component={Cholesky} />
                <Route path="/Conjugate_Gradient" component={Conjugate_Gradient} />
                <Route path="/cramer" component={Cramer} />
                <Route path="/Gauss_Jordan_Method" component={Gauss_Jordan_Method} />
                <Route path="/Gauss_seidel" component={Gauss_seidel} />
                <Route path="/Jacobi" component={Jacobi} />
                <Route path="/Lu" component={Lu} />
                {/*Ordinary_Differential_Equation*/}
                <Route path="/Euler" component={Euler} />
                <Route path="/Fw_Diff" component={Fw_Diff} />
                <Route path="/Heun" component={Heun} />
                <Route path="/Modifier_Euler" component={Euler} />
                {/*Regression*/}
                <Route path="/Linear_Regression" component={Linear_Regression} />
                <Route path="/Multiple_Linear_Regression" component={Multiple_Linear_Regression} />
                <Route path="/Polynomial_Regression" component={Polynomial_Regression} />
                {/*Root_of_Equation*/}
                <Route path="/Bisection" component={Bisection} />
                <Route path="/False_position" component={False_position} />
                <Route path="/Newton_raphson" component={Newton_raphson} />
                <Route path="/Onepoint" component={Onepoint} />
                <Route path="/Secant" component={Secant} />
                {/*Differentiation*/}
                <Route path="/Backward_Divided_Differences" component={Backward_Divided_Differences} />
                <Route path="/Central_Divided_Differences" component={Central_Divided_Differences} />
                <Route path="/Forward_Divided_Differences" component={Forward_Divided_Differences} />

                <Route path="/Backward_Divided_Differences2" component={Backward_Divided_Differences2} />
                <Route path="/Central_Divided_Differences2" component={Central_Divided_Differences2} />
                <Route path="/Forward_Divided_Differences2" component={Forward_Divided_Differences2} />
              </Content>

            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
