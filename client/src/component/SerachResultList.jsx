import React from 'react'
import SearchResult from './SearchResult'

function SerachResultList({ dataCountry }) {
  return (
    <div className="result-list">
    {dataCountry.map(( data, id )=>{
    return <SearchResult  dataCountry={data} key={id} />
})}
</div>
  )
}

export default SerachResultList