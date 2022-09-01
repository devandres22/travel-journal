import React from 'react';

import pin from '../imgicons/pin2.png'

export default function Card({item}) {

  return (
    <div className='card'>
      <img className='card-img' src={item.imageUrl} alt="" />
      <div className='card-content'>
        <div className='card-header'>
          <img className='pin' src={pin} />
          <p className='card-location'>{item.location.toUpperCase()}</p>
          <a className='card-link' href={item.googleMapsUrl}> View on Google Maps </a>
        </div>
        <h1 className='card-title'>{item.title}</h1>
        <p className='card-dates'>{item.startDate} - {item.endDate}</p>
        <p className='card-desc'>{item.description}</p>
      </div>
    </div>
  )
}