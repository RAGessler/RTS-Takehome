import React, { useState, useEffect } from 'react';

const SearchHistory = (props) =>{
    const [displayedHistory, setDisplayedHistory] = useState(props.history)

    useEffect(()=>{
        setDisplayedHistory(props.history)
    },[props.history])
    
    return(
        <div>
            <ul>
                {displayedHistory.map((term)=>{
                    return(
                        <li>{term}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default SearchHistory