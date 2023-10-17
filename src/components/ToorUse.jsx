import React from 'react'
import "../styles/TourList.css";

const ToorUse = () => {
  return (
    <div><div className="tourReason">
    <h2 style={{borderLeft: '3px solid #C29D59', padding: '.5rem'}}>WHY BOOK WITH US?</h2>
    <p style={{fontSize:'1.2rem'}}>Best Price Guarantee <br />
       Customer care available 24/7 <br />
       Free Travel Insureance <br />
       Hand-picked Tours & Activities</p>
  </div>
  <div className="question" style={{backgroundColor:'#C29D59', padding:'2rem'}}>
    <h2 style={{borderLeft: '3px solid black ', padding: '.5rem'}}>GET A QUESTION?</h2>
    <p style={{fontSize:'1.2rem'}}>Do not hesitage to give us a call. <br />
     We are an expert team and <br />
      we are happy to talk to you.</p>
      <p>holidayplanners@gmail.com</p>
      <p>+123 456 7890</p>
  </div></div>
  )
}

export default ToorUse