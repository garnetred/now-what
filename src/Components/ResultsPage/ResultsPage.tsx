import React from "react";
import { searchResult } from "../../types";
import Result from "../Result/Result";
import "./ResultsPage.css";

interface Props {
  results: searchResult[];
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

const ResultsPage = (props: Props) => {
  const results = props.results.map((r) => (
    <Result
      key={r.Name}
      data={r}
      toggleFavorite={props.toggleFavorite}
      favorite={props.favorites.includes(`${r.Type}:${r.Name}`)}
    />
  ));
  const searchItem = results.shift()
 
  return (
    <div className="ResultsPage">
      <section className="search-item-display">
        <h2>Main Title</h2>
        {searchItem}
      </section>
      <h2>Related Titles</h2>
      {results}
    </div>
  )
};

export default ResultsPage;
