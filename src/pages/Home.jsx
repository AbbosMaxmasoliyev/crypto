import React, { useState } from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Navbar from '../components/Navbar';
import LineChart from '../components/linechart';
import CryptoBalance from '../components/CryptoBalance';
import Assets from '../components/Assets';
import CandleStick from '../components/CandleStick';
import Code from "../components/code.json"





export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simvol: Code.data.coins[0].symbol,
            name: Code.data.coins[0].name,
            price: Code.data.coins[0].price,
            change: Code.data.coins[0].change,
            display: false
        }

    }


    render() {
        const data = Code.data.coins
        return (
            <div className='home' >
                <Navbar />
                <div className='mainBlock'>
                    <Assets />
                    <div className="mainBlock_CryptoMain">
                        <CryptoBalance nechta={6} />
                    </div>
                    <div className="mainBlock__see">
                        <div className="mainBlock__see__top">
                            <div className="button" style={{ color: "#fff" }} onClick={() => this.setState({ display: !this.state.display })}>
                                <p className='simvol'>{this.state.simvol}USDT</p>
                                <span className='price'>${parseFloat(this.state.price).toFixed(3)}</span>
                                <p className='name'>{this.state.name}</p>
                                {
                                    parseFloat(this.state.change) > 0 ?
                                        <span className='change' style={{ background: "#2A4037", color: "#07F8B5" }}>+{this.state.change}%</span>
                                        : <span className='change' style={{ background: "#FF53a1", color: "#FF53" }}>-{this.state.change}%</span>
                                }
                            </div>
                            <div className="mainBlock__see__buttons" onMouseLeave={() => this.setState({ display: false })} style={this.state.display ? { display: "block" } : { display: "none" }}>
                                {
                                    data.map((x, index) => (
                                        <div key={index} className='button button_margin' style={{ color: "#fff" }} onClick={() => this.setState({ simvol: x.symbol, name: x.name, change: x.change, price: x.price })} >
                                            <p className='simvol'>{x.symbol}USDT</p>
                                            <span className='price'>{parseFloat(x.price).toFixed(4)}</span>
                                            <p className='name'>{x.name}</p>
                                            {
                                                parseFloat(x.change) > 0 ?
                                                    <span className='change' style={{ background: "#2A4037", color: "#07F8B5" }}>+{x.change}%</span>
                                                    : <span className='change' style={{ background: "#490517", color: "#FF53" }}>-{x.change}%</span>
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <CandleStick simvol={this.state.simvol} />
                    </div>
                    <div className="crytoAll">
                        <div className="crytoAll__top">
                            <p>Markets</p>
                            <div className="crytoAll__top__buttons">
                                <button>All</button>
                                <button>Meta</button>
                                <button>Gaming</button>
                            </div>
                        </div>
                        {
                            data.map((x, index) => (
                                <div className='crytoAll__crypto' key={index}>
                                    <p>{x.symbol}USDT</p>
                                    <p>{x.name}</p>
                                    <p>${parseFloat(x.price).toFixed(5)}</p>
                                    {parseFloat(x.change) > 0 ? <p style={{ color: "#07F8B5", background: "#2A4037" }}>+{x.change}</p> : <p style={{ color: "#FF5361", background: "#490517" }}>{x.change}</p>}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

