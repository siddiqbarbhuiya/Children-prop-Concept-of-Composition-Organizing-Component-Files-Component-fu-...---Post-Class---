import React, { useState } from 'react'

const State = ({displayCity, id, stateName}) => {
  return (
    <div
    id={`state${id + 1}`}
    onClick={() => displayCity(id)}
    >
    {stateName}
    </div>
  )
}

export default State
