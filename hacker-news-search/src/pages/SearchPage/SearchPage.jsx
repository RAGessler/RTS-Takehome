//General
import SearchBar from '../../components/SearchBar';
//Utilities
import React, { useState, useEffect } from 'react';
import SearchResults from '../../components/SearchResults';


const SearchPage = (props) => {

    return(
        <div>
            <h1>Search Page</h1>
            <SearchBar search={props.search}/>
            <SearchResults items={props.items} />
        </div>
    )

}
export default SearchPage