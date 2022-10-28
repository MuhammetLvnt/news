import React, { useEffect } from "react";

function FavoriteAdd(props) {
  const { news } = props;

  function addFavorite() {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if (existingEntries == null) existingEntries = [];
    if (!existingEntries.some((a) => a.url == news?.url))
      existingEntries.push(news);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));

    JSON.parse(localStorage.getItem(news));
  }

  return (
    <div>
      <button onClick={addFavorite}>
        <i className="fa-regular fa-star mx-10 hover:bg-red-600"></i>
      </button>
    </div>
  );
}

export default FavoriteAdd;
