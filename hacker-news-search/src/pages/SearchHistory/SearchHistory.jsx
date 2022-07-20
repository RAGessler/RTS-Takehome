import React, { useState, useEffect } from 'react';

const SearchHistory = (props) =>{
    const [displayedHistory, setDisplayedHistory] = useState(props.history)

    useEffect(()=>{
        setDisplayedHistory(props.history)
    },[props.history])
    
    return(
        <div>
            <h1>History</h1>
            <ul>
                {/* I wanted to map it in reverse.  The slice and reverse are not nessicairy */}
                {displayedHistory.slice(0).reverse().map((term, el)=>{
                    return(
                        <li key={el}>{term}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default SearchHistory