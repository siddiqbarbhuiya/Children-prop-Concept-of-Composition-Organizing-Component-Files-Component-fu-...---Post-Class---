import React from 'react'

const City = ({displayTowns, id, cityName}) => {
  return (
    <div id={`city${id+1}`} onClick={() => displayTowns(id)}>{cityName}</div>
  )
}

export default City;
