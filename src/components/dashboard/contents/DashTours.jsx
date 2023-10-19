import React from 'react';
import '../../../styles/DashTours.css';
import offer1 from '../../../../public/images/offer-img1.jpg';
import offer2 from '../../../../public/images/offer-img2.jpg';
import offer3 from '../../../../public/images/offer-img3.jpg';
import offer4 from '../../../../public/images/offer-img4.jpg';

const DashTours = () => {

  const dashTours = [
    {
      id: 1,
      image: {
        src: offer1,
        width: 100, 
        height: 100, 
      },
      title: 'The first tour',
      description: 'The first tour description',
      country: 'United States',
      duration: '20 Days',
      groupsize: '20 people',
      price: '$100'
    },
    {
      id: 2,
      image: {
        src: offer2,
        width: 100, 
        height: 100, 
      },
      title: 'The second tour',
      description: 'The second tour description',
      country: 'United States',
      duration: '15 Days',
      groupsize: '15 people',
      price: '$150'
    },
    {
      id: 3,
      image: {
        src: offer3,
        width: 100, 
        height: 100, 
      },
      title: 'The third tour',
      description: 'The third tour description',
      country: 'United States',
      duration: '25 Days',
      groupsize: '25 people',
      price: '$200'
    },
    {
      id: 4,
      image: {
        src: offer4,
        width: 100, 
        height: 100, 
      },
      title: 'The fourth tour',
      description: 'The fourth tour description',
      country: 'United States',
      duration: '18 Days',
      groupsize: '18 people',
      price: '$120'
    }
  ];

  return (
    <div className='dashtourCont'>
<div className="dashtourheader">
<h1>Available tools</h1>
  <button  className='newTour'>NEW TOUR</button>
</div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Country</th>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Group size</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashTours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>
                <img
                  src={tour.image.src}
                  alt={`Tour ${tour.id}`}
                  style={{
                    width: `${tour.image.width}px`, 
                    height: `${tour.image.height}px`, 
                  }}
                />
              </td>
              <td>{tour.country}</td>
              <td>{tour.title}</td>
              <td>{tour.description}</td>
              <td>{tour.duration}</td>
              <td>{tour.groupsize}</td>
              <td>{tour.price}</td>
              <td>
                <div className="action">
                  <button className='editt'>EDIT</button>
                  <button className='deletee'>DELETE</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashTours;
