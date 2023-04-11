
import React,{ useState,Suspense } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx';


function App() {
  const [searchedValue, setSearchedValue] = useState("");
  const SearchResults =  searchedValue?React.lazy(()=>import('./components/SearchResults')):null;
  return (
    <div className="App">
      <SearchBar onSearch={setSearchedValue} />


   {searchedValue? <Suspense  fallback={<div>Loading...</div>}><SearchResults searchedValue={searchedValue}/></Suspense>: <h1>No Search Results</h1>}
    </div>
  )
}

export default App
