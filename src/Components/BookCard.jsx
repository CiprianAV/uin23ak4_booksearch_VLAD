import React from 'react';

const BookCard = ({ book }) => {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>Published: {book.publish_date}</p>
      <p>Author: {book.author_name}</p>
      <p>Average Rating: {book.average_rating}</p>
      <a
        href={`https://www.amazon.com/s?k=${book.amazon_id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Search on Amazon
      </a>
    </li>
  );
};

export default BookCard;