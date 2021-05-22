import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Input, Button, Card, Table } from 'antd';
import { compile } from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';


// const { Content } = Layout;
const InputStyle = {
    background: "white",
    color: "#ffa31a",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: 'center',
    marginLeft: "40%",
};
var dataInTable = []

const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "XL",
        dataIndex: "xl",
        key: "xl"
    },
    {
        title: "XR",
        dataIndex: "xr",
        key: "xr"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];

var fx
class Bisec extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            xl: 0,
            xr: 0,
            showOutputCard: false,
            showGraph: false,
            moveLeft: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.bisection = this.bisection.bind(this);
    }

    

    bisection(xl, xr) {
        fx = this.state.fx;
        var increaseFunction = false;
        var xm = 0;
        var sum = parseFloat(0.000000);
        var n = 0;
        var data = []
        data['xl'] = []
        data['xr'] = []
        data['x'] = []
        data['error'] = []
        
        

        if (this.func(xl) < this.func(xr)) {
            increaseFunction = true;
        }

        do {
            xm = (xl + xr) / 2;
            if (this.func(xm) * this.func(xr) < 0) {
                sum = this.error(xm, xr);
                if (increaseFunction) {
                    xl = xm;
                }
                else {
                    xr = xm;
                }
            }
            else {
                sum = this.error(xm, xl);
                if (increaseFunction) {
                    xr = xm;
                }
                else {
                    xl = xm;
                }
          
            }
            
            data['xl'][n] = xl;
            data['xr'][n] = xr;
            data['x'][n] = xm.toFixed(8);
            data['error'][n] = Math.abs(sum).toFixed(8);
            n++;
            
            
            
        } while (Math.abs(sum) > 0.000001);
        this.createTable(data['xl'], data['xr'], data['x'], data['error']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })
        
    }

    func(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);

    }

    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }

    createTable(xl, xr, x, error) {
        dataInTable = []
        for (var i = 0; i < xl.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                xl: xl[i],
                xr: xr[i],
                x: x[i],
                error: error[i]

                
            });
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    render() {
        return (

            
            <div >
                <div className="bisecpage"> <p>Bisection</p></div>
                <div

                    onChange={this.handleChange}
                    style={{
                        padding: '50px',
                        background: "#6c757d",
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            width: 500,
                            color: "#333333",
                            background: "#6c757d"

                        }}
                    >
                        <h2 style={{ marginLeft: "160px" }}> function </h2> <input class="form-control form-control-lg" type="text" name="fx"></input>
                        <h2 style={{ marginLeft: "200px" }}>X<sub>L</sub></h2> <input class="form-control form-control-lg" type="text" name="xl"></input>
                        <h2  style={{ marginLeft: "200px" }}>X<sub>R</sub></h2>  <input class="form-control form-control-lg" type="text" name="xr" />
                        <br /><br />
                        <Button id="submit_button" onClick={
                            () => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))
                        }
                            style={{ background: "#000000", color: "white", fontSize: "20px" }}> SUBMITH <br></br></Button>
                        

                    </div>

                    <br /><br />
                    {this.state.showGraph &&
                        <Card
                            style={{ borderRadius: "20px" }}
                        >
                            <LineChart width={730} height={250} data={dataInTable}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="error" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} />
                                <Line name="error" type="monotone" dataKey="error" stroke="blue" />
                            </LineChart>
                        </Card>
                    }
                    <br /><br />
                    {this.state.showOutputCard &&

                        <Card
                            style={{ borderRadius: "10px"}}
                        >
                            <Table columns={columns} dataSource={dataInTable} bodyStyle={{fontWeight: "bold",  fontSize: "18px", color: "blue" }}></Table>
                        </Card>
                    }
                    <br /><br />
                </div>
            </div>
        )
    }
   
}
export default Bisec;