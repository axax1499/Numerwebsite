import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Input, Button, Card, Table } from 'antd';
import { compile, range } from 'mathjs';
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
var dataInTable = []
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];
const xValues = range(-10, 10, 0.5).toArray();
var fx = " ";
class Secant extends Component {

    constructor() {
        super();
        this.state = {
            fx: "",
            x0: 0,
            x1: 0,
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.secant = this.secant.bind(this);
    }

    secant(x0, x1) {
        fx = this.state.fx;
        var x = [], y = 0, epsilon = parseFloat(0.000000);
        var n = 1, i = 1;
        var data = []
        data['y'] = []
        data['error'] = []
        x.push(x0);
        x.push(x1);
        data['y'][0] = x0;
        data['error'][0] = "---";

        do {
            y = x[i] - (this.func(x[i]) * ((x[i] - x[i - 1]))) / (this.func(x[i]) - this.func(x[i - 1]));
            x.push(y);
            epsilon = this.error(y, x[i]);
            data['y'][n] = y.toFixed(8);
            data['error'][n] = Math.abs(epsilon).toFixed(8);

            n++;
            i++;

        } while (Math.abs(epsilon) > 0.000001);
        this.createTable(data['y'], data['error']);
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
    createTable(y, error) {
        dataInTable = []
        for (var i = 0; i < y.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                y: y[i],
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
            <div > <div className="bisecpage"> <p>Secant</p></div>
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
                        <h2 style={{ marginLeft: "200px" }} >X<sub>1</sub></h2><input class="form-control form-control-lg" type="text" name="x1"></input>
                        <br /><br />
                        <Button id="submit_button" onClick={
                            () => this.secant(parseFloat(this.state.x0), parseFloat(this.state.x1))
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
        );
    }
}
export default Secant;

