import { useState } from "react";
import { authors } from "../../data/authors";
import "./Authors.css";
const Authors = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          type="search"
          placeholder="search in authors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="authors-wrapper">
        {authors
          .filter((author) => author.name.toLowerCase().includes(search))
          .map((author) => (
            <div className="author" key={author.name}>
              <img
                src={author.image}
                alt={author.name}
                className="author-img"
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Authors;
