import React from "react";

import "./index.css";

const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="input"
        placeholder="Найти"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
