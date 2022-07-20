import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    function handleSubmit(event){
        
    }

    return(
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search' value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
export default SearchBar