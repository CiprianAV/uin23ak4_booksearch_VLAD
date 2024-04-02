import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      searchBooks(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const searchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}+subject:"James Bond (Fictitious character)"`
      );
      const searchResultsWithDetails = await Promise.all(
        response.data.docs.map(async (book) => {
          const bookDetailsResponse = await axios.get(
            `https://openlibrary.org${book.key}.json`
          );
          return {
            title: book.title,
            publish_year: book.publish_year ? book.publish_year[0] : "Unknown",
            author: book.author_name ? book.author_name.join(", ") : "Unknown",
            average_rating: bookDetailsResponse.data?.details?.average_rating || "N/A",
            amazon_id: book.amazon_id,
          };
        })
      );
      setSearchResults(searchResultsWithDetails);
    } catch (error) {
      console.error('Error searching books:', error);
      setSearchResults([]); // Reset search results if an error occurs
    }
  };

  return (
    <div className="container">
      <h1>James Bond Book Search</h1>
      <input
        type="text"
        placeholder="Search for James Bond books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {searchResults.map((book) => (
          <div key={book.title}>
            <h3>{book.title}</h3>
            <p>Published Year: {book.publish_year}</p>
            <p>Author(s): {book.author}</p>
            <p>Average Rating: {book.average_rating}</p>
            <a
              href={`https://www.amazon.com/s?k=${book.amazon_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Search on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
