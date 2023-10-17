import React from 'react'
import '../styles/Destination.css'
import dest1 from '../../public/images/destination-img1.jpg'
import dest2 from '../../public/images/destination-img2.jpg'
import dest3 from '../../public/images/destination-img3.jpg'
import dest4 from '../../public/images/destination-img4.jpg'

const Destination = () => {
  return (
    <div className= 'destination'>
        <div className="destinationIntro">
            <p>Amazing Destinations</p>
            <h2>Choose The Destination Just <br /> Right For Your Vacation</h2>
        </div>
        <div className="destinationList">
            <div className="destinationLeft">
                <div className="upperLeft">
                    <img src={dest1} alt="" id='destImg' style={{width: '100%', height:'100%'}} />
                </div>
                <div className="lowerLeft">
                    <div className="lower1">
                        <img src={dest2} alt="" id='destImg' style={{width: '100%', height:'93%'}} />
                    </div>
                    <div className="lower2">
                        <img src={dest3} alt=""id='destImg' style={{width: '100%', height:'93%'}} />
                    </div>
                </div>
            </div>
            <div className="destinationRight">
            <img src={dest4} alt="" id='destImg' style={{width: '100%', height:'100%'}} />
            </div>
        </div>
    </div>
  )
}

export default Destination