import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from './ScotchInfoBar';
import "./styles.css";

function App() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  function fetchData() {
    fetch(apiURL)
      .then(setLoading(true))
      .then(resp => resp.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
  }

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div id="loader" className={loading ? 'on' : ''}></div>
      <div className="books">
        {books &&
          books.map((book, index) => {
            const authors = book.authors.join(", ");
            const date = new Date(book.released).toDateString();
            return (
              <div className="book" key={book.isbn}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>
                <div className="details">
                  <p><span role="img" aria-label="Author/Authros">👨</span>: {authors}</p>
                  <p><span role="img" aria-label="Number of pages">📖</span>: {book.numberOfPages}</p>
                  <p><span role="img" aria-label="Book Country">🏘️</span>: {book.country}</p>
                  <p><span role="img" aria-label="Release date">⏰</span>: {date}</p>
                </div>
              </div>
            )
          })}
      </div>
      <ScotchInfoBar seriesNumber={7} />
    </div >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
