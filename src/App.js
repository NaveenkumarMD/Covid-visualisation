import React, { useState } from 'react'
import Charts from './Components/charts'

import Form from './Components/Form'
import Navbar from './Components/Navbar'

function App() {
    const [country,setcountry]=useState({})
    console.log(country)
    return (
        <div>
            <Charts />
        </div>
    )
}

export default App
