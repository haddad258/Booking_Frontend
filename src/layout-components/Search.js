import React, { Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  return (
    <Fragment>
      
        <input
          id="search"
          name="search"
          type="text"
          
          style={{ width: 500}}
         
        />
        <label htmlFor="search"></label>
        <button
          
          type="submit"
          aria-label="Search"
        >
          <SearchIcon />
        </button>
        </Fragment>
    
  );
};
export default Search;