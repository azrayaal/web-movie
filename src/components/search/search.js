import React, { useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState(' ');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <div class=" xl:w-96">
      <div class="input-group relative flex flex-wrap items-stretch w-full ">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-500 bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
    </div>
  );
};

export default Search;
