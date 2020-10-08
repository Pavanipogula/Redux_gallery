import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import './SearchBar.css';
function SearchBar (){
    const [searchString, setSearchString] = useState("");
    const history = useHistory();
    function handleSubmit(){ 
        let path = '/' + searchString
        history.push(path)
    }
    const handleChange = event => {
        setSearchString(event.target.value);
      };
    return (
      <form class = "form" onSubmit={handleSubmit}>
          <input class = "searchText" value = {searchString} type="text" onChange={handleChange} />
        <input class = "submitButton" type="submit" value="Submit"/>
      </form>
    );
}
export default SearchBar;