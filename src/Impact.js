import React from 'react';
import { Radar } from 'react-chartjs-2';
import {likelihoodcount,relevancecount,impactcount} from './Testcases'
const data = {
    labels: ['Low','Medium','High'],
    datasets: [
        {
            label: 'Impact',
            data: impactcount,
            backgroundColor: 'rgba(600,345,132,0.3)',
            borderColor: 'rgba(600,345,132,1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    scale: {
        ticks: { beginAtZero: true },
    },
};

const Impact= () => {
    
    return (
        <div style={{height:500,width:500}}>
            <Radar data={data} options={options} />
        </div>
    )
}



export default Impact;