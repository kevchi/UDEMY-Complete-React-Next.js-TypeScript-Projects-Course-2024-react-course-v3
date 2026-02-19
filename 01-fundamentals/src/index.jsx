// index_topic_47-50

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

import './index.css';
import { books } from './books';
import Book from './Book';

//

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {/* 
         To add a numbers to each book. we would need to:
          - Add the index to the map parameter.
        */}

        {books.map((book, index) => {
          // - Pass the index to the Book component as a prop named "number"
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

/*
Then, in the book.jsx file, we would need to:
1. We receive the index through the number prop
2. Destructure number along with other props
3. Display the number using a span tag
4. Add 1 to number (array indexes start at 0) to display numbers starting at 1
/*
From  book.js file:

const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
*/

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
