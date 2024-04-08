import React from 'react';
import BookCard from './BookCard'; 

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
