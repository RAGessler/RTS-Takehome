//General
import SearchBar from '../../components/searchbar';
//Utilities
import React, { useState, useEffect } from 'react';


const SearchPage = (props) => {

    function handleSearch(userInput)

    return(
        <div>
            <h1>Search Page</h1>
            <SearchBar search={props.search} />
        </div>
    )

}
export default SearchPage