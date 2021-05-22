import React, { Component } from 'react'
import { Card, Input, Button, Table, Layout } from 'antd';
import 'antd/dist/antd.css';
import { compile, derivative } from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
const { Content } = Layout;
const InputStyle = {
    background: "white",
    color: "#ffa31a",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: 'center',
    marginLeft: "40%",
};
var dataInTable;
var fx = " ";
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
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

class Newton_raphson extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            x0: 0,
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.newton_raphson = this.newton_raphson.bind(this);
    }

    newton_raphson(xold) {
        fx = this.state.fx;
        var xnew = 0;
        var epsilon = parseFloat(0.000000);
        var n = 0;
        var data = []
        data['x'] = []
        data['error'] = []
        do {
            xnew = xold - (this.func(xold) / this.funcDiff(xold));
            epsilon = this.error(xnew, xold)
            data['x'][n] = xnew.toFixed(8);
            data['error'][n] = Math.abs(epsilon).toFixed(8);
            n++;
            xold = xnew;
        } while (Math.abs(epsilon) > 0.000001);

        this.createTable(data['x'], data['error']);
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
    funcDiff(X) {
        var expr = derivative(this.state.fx, 'x');
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }
    createTable(x, error) {
        dataInTable = []
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                iteration: i + 1,
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
                <div className="bisecpage"> <p>Newton raphson</p></div>
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
                        <h2 style={{ marginLeft: "200px" }} >X<sub>0</sub></h2><input class="form-control form-control-lg" type="text" name="x0"></input>
                        <br /><br />
                        <Button id="submit_button" onClick={
                            () => this.newton_raphson(parseFloat(this.state.x0))
                        }
                        style={{ background: "#000000", color: "white", fontSize: "20px" }}>SUBMITH <br></br></Button>


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
                            style={{ borderRadius: "10px" }}
                        >
                            <Table columns={columns} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "blue" }}></Table>
                        </Card>
                    }
                    <br /><br />
                </div>
            </div>
        )
    }
}
export default Newton_raphson;

