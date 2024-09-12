import React, { useState } from 'react'
import "./SearchResultList.css"

function SerachResultList({ dataCountry,onSelect }) {
  
  const handleSelect =(data)=>{
    onSelect(data);
 
  
  }
  return (     
      <ul className="result-list">
   {dataCountry.slice(0, 5).map((data, id,index) => (
        <option  key={id} onClick={() => handleSelect(data)}>
          {data}
        </option>
      ))}
       </ul>
  )
}

export default SerachResultList
