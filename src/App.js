import React from 'react'
import Impact from './Impact'
import Likelihood from './Chart'
import Relevance from './Relevance'

function App() {
  return (
    <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',justifyContent:'center',padding:50}}>
      <Likelihood/>
      <Relevance/>
      <Impact/>
    </div>
  )
}

export default App
