import React, { useState } from "react";
import "./SearchForm.css";

interface Props {
  searchTerm: (term: string) => void;
}

const SearchForm: React.FC<Props> = (props: Props) => {
  const [query, setQuery] = useState("");

  const search = () => {
    if (query.trim()) {
      props.searchTerm(query.trim());
      setQuery(query.trim());
    }
  };
  return (
    <section className="form-background">
      <section className="text-container">
        <h1 className="main-page-text">Find Your Next Obession</h1>
        <p className="main-page-p">
          Get recommendations for books, movies, games, artists, and tv shows by
          searching for a specific title
        </p>
      </section>
      <section className="form-container">
        <form className="SearchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="ex: Frozen"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search()}
            value={query}
            aria-label="Title Search"
          />
          <button onClick={search}>Search</button>
        </form>
      </section>
    </section>
  );
};

export default SearchForm;
