import React, { useCallback, useRef
   , useState } from "react";
import searchPng from '/src/assets/icons8-search-32.png'
import {debounce} from 'lodash'
const SearchBar = ({onSearch}) =>{
     const [inputText, setInputText] = useState("");
     const inputBarRef = useRef(null);
     const handleSearchButtonClick = () => {
        onSearch(inputText);
     }

     const debouncedSearch = useCallback(debounce((input)=>{onSearch(input)},2000),[]);

     const handleTyping = (e) => {
           setInputText(e.target.value);
           debouncedSearch(e.target.value);
     }
     
     const handleFocus = () =>{
      inputBarRef.current.focus();
     }
 
  return (
   
      <div className="search-container">
         <header>
      <input type="text" ref={inputBarRef} id="searchBar" value={inputText} onChange={handleTyping} onClick={handleFocus}/>
      <button id="searchButton" onClick={handleSearchButtonClick}>
         <img scr={searchPng} alt="Search"/>
      </button>
         </header>
      </div>
    
);

}

export default SearchBar;
