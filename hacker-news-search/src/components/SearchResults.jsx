import React, { useEffect, useState } from 'react';

const SearchResults = (props) => {
    const [displayedResults, setDisplayedResults] = useState(props.items)
    
    useEffect(()=>{
        setDisplayedResults(props.items)
    },[props.items])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date Posted</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedResults.map((result, el)=>{
                        return(
                            <tr key={el}>
                                <td>{el + 1}</td>
                                <td>{result.title}</td>
                                <td>{result.created_at}</td>
                                <td><a href={result.url}>Click Me</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default SearchResults