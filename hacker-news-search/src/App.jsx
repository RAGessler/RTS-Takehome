//General
import { Routes, Route } from "react-router-dom";
import './App.css';
import axios from "axios";

//Pages
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchHistory from "./pages/SearchHistory/SearchHistory";
import HomePage from "./pages/HomePage/HomePage";

// Utilities
import React, { useEffect, useState } from 'react';
import Navbar from "./components/NavBar";

function App() {
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
        path="/"
        element={<HomePage/>}
        />
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
