import React from 'react';
import { Radar } from 'react-chartjs-2';
import {likelihoodcount,relevancecount,impactcount} from './Testcases'
const data = {
    labels: ['Potential',
        'Possible',
        'Probabble',
        'Business as Usual'],
    datasets: [
        {
            label: 'Likelihood',
            data: likelihoodcount,
            backgroundColor: 'rgba(39,99,132,0.3)',
            borderColor: 'rgba(34, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    scale: {
        ticks: { beginAtZero: true },
    },
};

const Likelihood = () => {
    
    return (
        <div style={{height:500,width:500}}>
            <Radar data={data} options={options} />
        </div>
    )
}



export default Likelihood;