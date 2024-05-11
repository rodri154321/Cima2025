import React from 'react'
import SearchResult from './SearchResult'

function SerachResultList({ dataCountry }) {
  return (
    <div className="result-list">
   {dataCountry.slice(0, 5).map((data, id) => (
        <SearchResult dataCountry={data} key={id} />
      ))}
</div>
  )
}

export default SerachResultList