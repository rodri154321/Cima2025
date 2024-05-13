import React, { useState } from 'react'
import SearchResult from './SearchResult'

function SerachResultList({ dataCountry,onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect =(data)=>{
    onSelect(data);
    console.log(data)
    setIsOpen(false);
  }
  return (     
      <ul className="result-list">
   {dataCountry.slice(0, 5).map((data, id,index) => (
        // <SearchResult dataCountry={data} key={id} />
        <option key={id} onClick={() => handleSelect(data)}>
          {data}
        </option>
      ))}
       </ul>
  )
}

export default SerachResultList
