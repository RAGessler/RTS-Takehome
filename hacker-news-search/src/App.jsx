//General
import { Routes, Route } from "react-router-dom";
import './App.css';
import axios from "axios";

//Pages
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchHistory from "./pages/SearchHistory/SearchHistory";

// Utilities
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from "./components/NavBar";

function App() {
  const navigate = useNavigate()
  const [searchHistory, setSearchHistory] = useState([]);
  const [foundItems, setFoundItems] = useState([])

  async function searchItems(searchQuery){
    let response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    setFoundItems(response.data.hits)
    setSearchHistory([...searchHistory, searchQuery]) 
  }

  useEffect(()=>{
    console.log(searchHistory)
  },[searchHistory])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
        path="/search"
        element={
          <SearchPage search={searchItems} items={foundItems}/>
        }
        />
        <Route 
        path="/history"
        element={<SearchHistory history={searchHistory} />}
        />
      </Routes>
    </div>
  );
}

export default App;
