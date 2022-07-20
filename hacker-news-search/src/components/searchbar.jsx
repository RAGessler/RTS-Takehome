import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        props.search(searchTerm)
        setSearchTerm('')
    }

    return(
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search' value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}
export default SearchBar