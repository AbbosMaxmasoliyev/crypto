import { Minimize } from '@mui/icons-material';
import React from 'react'
import { Line } from 'react-chartjs-2';
import Code from "./code.json"
const CryptoBalance = (props) => {
    const json = Code.data.coins;
    const format = []
    for (let i = 0; i < props.nechta; i++) {
        // let formin = 
        const txt = {
            logo: json[i].iconUrl,
            simvol: json[i].symbol,
            color: `${json[i].color}`,
            name: json[i].name,
            price: json[i].price,
            changePercent: json[i].change,
            change: parseFloat(json[i].sparkline[24]) - parseFloat(json[i].sparkline[0]),
            data: {
                labels: json[i].sparkline,
                datasets: [
                    {
                        label: json[i].name,
                        data: json[i].sparkline,
                        borderColor: json[i].color,
                        fill: true,
                        tension: 0.7

                    }
                ]
            }
        }
        format.push(txt)
    }

    return (
        <div className='cryptosBlock'>
            {
                format.map((x, index) => (
                    <div className='cryptosBlock__block' key={index}>
                        <div className="cryptosBlock__block_top">
                            <div className="cryptosBlock__block_top__logo" style={{ background: `${x.color}71` }}>
                                <img src={x.logo} alt="" />
                            </div>
                            <div className="cryptosBlock__block_top__nameBlock">
                                <p className='cryptosBlock__block_top__nameBlock_simvol'>{x.simvol} USDT</p>
                                <p className='cryptosBlock__block_top__nameBlock_name'>{x.name}</p>
                            </div>
                        </div>
                        <div className="cryptosBlock__block_middle">
                            <div className="price">
                                <p>${parseInt(x.price)}</p>
                            </div>
                            <Line data={x.data} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        display: false
                                    },

                                },
                                scales: {
                                    x: {
                                        display: false
                                    },
                                    y: {
                                        beginAtZero: false,
                                        display: false,
                                        drawBorder: true
                                    }

                                }
                            }} />
                        </div>
                        <div className="cryptosBlock__block_bottom">
                            <p>PNL daily</p>
                            {
                                parseFloat(x.change) > 0 ? <span style={{ color: "#07F8B5" }}>{parseFloat(x.change).toFixed(6)}</span> : <span style={{ color: "#FF5361" }}>{parseFloat(x.change).toFixed(6)}</span>
                            }
                            {
                                parseFloat(x.changePercent) > 0 ? <span style={{ color: "#07F8B5", background: "#07F8B571" }}>{x.changePercent}%</span> : <span style={{ color: "#FF5345", background: "#FF536171" }}>{x.changePercent}%</span>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CryptoBalance