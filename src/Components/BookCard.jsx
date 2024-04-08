import React from 'react';

const BookCard = ({ book }) => {
  const formattedTitle = book.title.replace(/\s+/g, '+');
  const amazonSearchUrl = `https://www.amazon.com/s?k=${formattedTitle}`;

  return (
    <li>
      <h3>{book.title}</h3>
      <p>Published: {book.publish_date}</p>
      <p>Author: {book.author_name}</p>
      <p>Average Rating: {book.average_rating}</p>
      <a
        href={amazonSearchUrl} 
        target="_blank"
        rel="noopener noreferrer"
      >
        Search on Amazon
      </a>
    </li>
  );
};

export default BookCard;