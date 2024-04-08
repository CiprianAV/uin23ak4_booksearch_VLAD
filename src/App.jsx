import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/main.scss';
import SearchResults from './Components/SearchResults';
import BookCard from './Components/BookCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [jamesBondBooks, setJamesBondBooks] = useState([]);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      searchBooks(searchTerm);
    } else {
      fetchJamesBondBooks();
    }
  }, [searchTerm]);

  const fetchJamesBondBooks = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=james+bond`
      );
      const books = response.data.docs
        .filter(book => book.title.toLowerCase().includes('james bond'))
        .map(book => ({
          title: book.title,
          publish_date: book.first_publish_year ? book.first_publish_year.toString() : "Unknown",
          author_name: book.author_name ? book.author_name.join(", ") : "Unknown",
          average_rating: "N/A", 
          amazon_id: book.amazon_id,
        }));
      setJamesBondBooks(books);
    } catch (error) {
      console.error('Error fetching James Bond books:', error);
      setJamesBondBooks([]);
    }
  };
  

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
            publish_date: book.publish_year ? book.publish_year[0].toString() : "Unknown",
            author_name: book.author_name ? book.author_name.join(", ") : "Unknown",
            average_rating: bookDetailsResponse.data?.details?.average_rating || "N/A",
            amazon_id: book.amazon_id,
          };
        })
      );
      setSearchResults(searchResultsWithDetails);
    } catch (error) {
      console.error('Error searching books:', error);
      setSearchResults([]); 
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
      {searchTerm.length < 3 ? (
        <div className="results">
          <h2>James Bond Books</h2>
          <ul>
            {jamesBondBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </ul>
        </div>
      ) : (
        <SearchResults results={searchResults} />
      )}
    </div>
  );
}

export default App;