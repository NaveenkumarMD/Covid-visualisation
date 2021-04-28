import React from 'react';
import { Radar } from 'react-chartjs-2';
import {likelihoodcount,relevancecount,impactcount} from './Testcases'
const data = {
    labels: ['Vague',
        'Early stage',
        'Gaining Traction',
        'Evolving',
        'Established',
        'Expansionary',
        'Growing'],
    datasets: [
        {
            label: 'Relavance',
            data: relevancecount,
            backgroundColor: 'rgba(132,345,132,0.3)',
            borderColor: 'rgba(132,345,132,1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    scale: {
        ticks: { beginAtZero: true },
    },
};

const Relevance= () => {
    
    return (
        <div style={{height:500,width:500}}>
            <Radar data={data} options={options} />
        </div>
    )
}



export default Relevance;