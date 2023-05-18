import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, Filler
);
export default class CryptoBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='cryptoBlock' >
                <div className="cryptoBlock__top">
                    <img src={require(this.props.logoImage)} />
                    <div className="cryptoBlock__top__title">
                        <h4>{this.props.nameUSDT}USDT</h4>
                        <p>{props.name}</p>
                    </div>
                </div>
                <div className="cryptoBlock__middle">
                    <p className='summa'>{this.props.summa}</p>
                    <Line data={this.props.data} />
                </div>
                <div className="cryptoBlock__bottom">
                    <p>PNL daily</p>
                    {this.props.plus ? <span className='green'>{this.props.changeSumm}</span> : <span className='yellow'>-{this.props.changeSumm}</span>}
                    <span>{this.props.changePercent}</span>
                </div>
            </div>
        )
    }
}
