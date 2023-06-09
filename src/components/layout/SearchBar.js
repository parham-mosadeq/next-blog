import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import SearchResults from './SearchResults';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '' || searchTerm.trim() === '') {
        setSearchResult([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const result = await res.json();
        setSearchResult(result);
      }
    };
    getResults();
  }, [searchTerm]);

  return (
    <div className='z-0 bg-stone-300 relative  max-h-10 h-10 flex items-center  justify-end'>
      <div>
        <form className='relative' onSubmit={(e) => e.preventDefault()}>
          <Image
            className='absolute top-3 left-4 '
            src='/images/search.svg'
            alt='search icon'
            width={10}
            height={10}
          />
          <input
            className='capitalize rounded-md px-5 py-1 mx-3 focus:bg-stone-100 focus:outline-none'
            type='text'
            placeholder='search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <FaTimes
            onClick={() => setSearchTerm('')}
            className='absolute top-2 text-sm font-light right-5 cursor-pointer'
          />
        </form>
      </div>
      <SearchResults results={searchResult} />
    </div>
  );
};

export default SearchBar;
