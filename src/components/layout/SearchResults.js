import React from 'react';
import SearchResult from '../post/SearchResult';

const SearchResults = ({ results }) => {
  return (
    <div
      className={`${
        results.length > 0 ? 'block' : 'hidden'
      } absolute top-12 right-3 rounded-md border-4 w-3/4 sm:w-1/2 h-fit bg-stone-50 `}
    >
      <div className='p-10'>
        <h2 className='text-3xl mb-3 capitalize text-center border-b-2'>
          {results.length} results
        </h2>
        {results.map((result, idx) => (
          <SearchResult key={idx} post={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
