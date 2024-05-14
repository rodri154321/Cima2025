import React, { useState } from 'react'

function SerachResultList({ dataCountry,onSelect }) {
  
  const handleSelect =(data)=>{
    onSelect(data);
    console.log(data)
  
  }
  return (     
      <ul className="result-list">
   {dataCountry.slice(0, 5).map((data, id,index) => (
        <option key={id} onClick={() => handleSelect(data)}>
          {data}
        </option>
      ))}
       </ul>
  )
}

export default SerachResultList
