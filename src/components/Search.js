import React, { useState, useEffect } from "react";

import axios from "axios";

function Search(props) {
  const { setValues } = props;

  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  async function apiGetNews() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${search}&page=${pageNumber}&apiKey=af934a7a3ebb43d0a8a6022c7a61c575`
      )
      .then((res) => setValues(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (search === "") return;
    apiGetNews();
  }, [pageNumber]);

  return (
    <div>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-1  w-72"
        ></input>
        <button
          className="p-1 ml-3 bg-indigo-800 text-white w-24 rounded-md"
          onClick={apiGetNews}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
