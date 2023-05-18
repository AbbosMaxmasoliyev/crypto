
import React from "react";
import ReactApexChart from "react-apexcharts";

import dateFormat from 'dateformat';

import Code from "./code.json"
import { useMemo } from "react";
import { useEffect } from "react";

const CandleStick = (props) => {
    const data = {

        series: [{
            name: 'candle',
            data: []
        }],
        options: {
            chart: {
                height: 350,
                type: 'candlestick',
            },
            title: {
                text: 'CandleStick Chart - Category X-axis',
                align: 'left'
            },
            annotations: {
                xaxis: [
                    {
                        x: 'Oct 06 14:00',
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                fontSize: '12px',
                                color: '#fff',
                                background: '#00E396'
                            },
                            orientation: 'horizontal',
                            offsetY: 7,
                            text: 'Annotation Test'
                        }
                    }
                ]
            },
            tooltip: {
                enabled: true,
            },
            xaxis: {
                type: 'category',
                labels: {
                    formatter: function (val) {
                        return dateFormat(val, 'mm, dd,')
                    }
                }
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        },


    };

    let index = 0
    for (let i = 0; i < Code.data.coins.length; i++) {
        if (Code.data.coins[i].symbol === props.simvol) {
            index = i
        }

    }


    const code = Code.data.coins[index].sparkline;

    const jsonNumber = [];

    for (let k = 0; k < code.length; k++) {
        jsonNumber.push(parseFloat(code[k]).toFixed(5))

    };

    for (let l = 0; l < jsonNumber.length; l++) {
        if (jsonNumber[l + 1] < jsonNumber[l]) {
            let one = jsonNumber[l]
            let second = jsonNumber[l + 1]
            let third = jsonNumber[l + 2]
            let fourth = jsonNumber[l + 3]
            const sonlar = [one, second, third, fourth]
            data.series[0].data.push({
                x: new Date(1641215145200 + (l * 1000)),
                y: sonlar
            })
        } else {
            let one = jsonNumber[l]
            let second = jsonNumber[l - 1]
            let third = jsonNumber[l - 2]
            let fourth = jsonNumber[l - 3]
            const sonlar = [one, second, third, fourth]
            data.series[0].data.push({
                x: new Date(1641215145200 + (l * 10000)),
                y: sonlar
            })

        }


    }


    const resizeValue = useMemo(() => {
        return (window.outerWidth)/ 100 * 50
    }, [window.onresize]);

    return (
        <div className="chart">
            <ReactApexChart options={ data.options } series={ data.series } type="candlestick" height={400 } width={ resizeValue } />
        </div>
    )
}


export default CandleStick