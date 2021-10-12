import React,{useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'
import '../Styles/charts.css'
import Form from './Form';
import Navbar from './Navbar';  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
function Charts() {
    const [country,setcountry]=useState(null)
    const [data,setData]=useState([])
    const [datelabel,setdatelabel]=useState([])
    const graphdata = {
        labels: datelabel,
        datasets: [
          {
            label: 'Number of cases',
            data:data,
            fill: false,
            backgroundColor: 'rgba(7,207,164)',
            borderColor: 'rgba(7,207,164)',
          },
        ],
      };
    useEffect(async () => {
        var data=[]
        var datelabelarr=[]
        console.log(country)
        var countryname=country? country.Slug:"india"
        var url="https://api.covid19api.com/country/"+countryname+"/status/confirmed/live"
        console.log(url)
        await fetch(url,{
            method:"GET"
        }).then(res=>res.json()).then(res=>{
            res.forEach(datum=>{
                data.push(datum.Cases)
                const date=new Date(datum.Date)
                date.toLocaleString('en-US', {month: 'short'})
                datelabelarr.push(date.toLocaleString('en-US', {month: 'short'})+"-"+date.getFullYear().toString().substr(2,2))
            })
        })
        setData(data)
        setdatelabel(datelabelarr)
    }, [country])
    return (
        <div>
            <Navbar/>
            <Form setcountry={setcountry}/>
        
        <div className="chart">
            <h1 style={{textAlign:"center"}}>{country?country.Country:"India" }</h1>
                <Line data={graphdata} options={options} />
        </div></div>
    )
}

export default Charts
