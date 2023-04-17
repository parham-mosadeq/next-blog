import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResult([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);

        const { result } = await res.json();
        setSearchResult(result);
      }
    };

    getResults();
  }, [searchTerm]);
  return (
    <div className='bg-stone-300  w-full max-h-10 h-10 flex items-center justify-end'>
      <div>
        <form>
          <input
            className='capitalize rounded-md  px-2 py-1 mx-3   focus:outline-none'
            type='text'
            placeholder='search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
