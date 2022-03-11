import React from 'react'

const Town = ({id, townName}) => {
  return (
    <div id={`town${id + 1}`}>
      {townName}
    </div>
  );
}

export default Town;
