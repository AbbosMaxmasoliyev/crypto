import React, { Component } from 'react';
import Code from "./code.json"
import LineChart from '../components/linechart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourCoin: null,
            startYourCoin: null,
        }
    }
    render() {
        const data = Code;
        this.state.yourCoin = parseFloat(data.data.coins[1].price).toFixed(3)
        this.state.startYourCoin = (parseFloat(data.data.coins[1].btcPrice).toFixed(6) * 100).toFixed(4)
        let Percent = parseFloat(this.state.yourCoin) / (parseFloat(this.state.yourCoin) / 100) * 2
        Percent = Percent.toString()
        return (
            <div className="assets">
                <h3>Sample</h3>
                <p style={{ color: "white " }} className="balance">Your total balance</p>
                <div className="total">
                    <span style={{ color: "white" }} className="youcoin">$ {this.state.yourCoin}</span>
                    <span style={{ color: "white" }} className="startcoin">$ {this.state.startYourCoin}</span>
                    <span className="percent"><ArrowDropUpIcon /> {Percent}% </span>
                </div>
                <LineChart />
            </div>
        )
    }
}
