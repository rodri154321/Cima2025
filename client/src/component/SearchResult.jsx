import React from 'react'
import "./SearchResult.css"
function SearchResult({ dataCountry }) {
    return (
       <div className='search-result' >{dataCountry} </div>
    )
}

export default SearchResult