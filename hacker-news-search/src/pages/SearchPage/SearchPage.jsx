//General
import SearchBar from '../../components/SearchBar';
//Utilities
import React, { useState, useEffect } from 'react';


const SearchPage = (props) => {

    return(
        <div>
            <h1>Search Page</h1>
            <SearchBar search={props.search}/>
        </div>
    )

}
export default SearchPage