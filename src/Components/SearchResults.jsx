import React from 'react';
import BookCard from './BookCard'; // Import the BookCard component

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {/* Map over the search results and render a BookCard for each book */}
        {results.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
