import React from 'react'
import Example from '../../../Linechart'

const DashHome = () => {
  return (
    <div style={{backgroundColor:'white', display:'flex', justifyContent:'center', margin:'auto', alignItems:'center', textAlign:'center', height:'100vh', width:'100%'}}>
      Overall statistics
      <Example />
    </div>
  )
}

export default DashHome