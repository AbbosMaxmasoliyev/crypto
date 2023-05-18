import React, { useState, useEffect } from 'react';

// Chart JS dan kerakli modullar import qilinmoqda
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
import { Line } from "react-chartjs-2";

import Code from "./code.json"


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, Filler
);



const BarChart = () => {

    console.log(Code.data.coins);
    var data = {

        // const ctx = canvas.getContext("2d");
        // let gradient = ctx.createLinearGradient(0, 0, 10000, 1000);
        // gradient.addColorStop(0, "rgba(65, 98)")
        // gradient.addColorStop(0.5, "rgba(0, 45)")
        // gradient.addColorStop(1, "rgba(54, 45)")

        labels: Code.data.coins.map(x => x.name),
        datasets: [{
            label: `${Code.data?.coins?.length} Coins Available`,
            data: Code.data?.coins?.map(x => x.price),
            // data: Code.data.coins.map,
            backgroundColor: "red",
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            tension: 0.4,
            borderWidth: 1,
            fill: true,

        }]
    };

    var options = {
        maintainAspectratio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    };





    return (
        <div className='app' style={{ width: 600, height: "400px" }}>
            <Line data={data} height={100} options={options} />
        </div >
    )
}

export default BarChart