import React from "react";
import Header from "./Header";
import Share from "./Share";

function Favorite() {
  let favorite = JSON.parse(localStorage.getItem("allEntries"));

  return (
    <>
      <Header />
      {favorite?.map((favorites) => (
        <>
          <div className="flex flex-row">
            <div className="basis-3/6">
              <img
                className="w-[500px] mx-10 mt-5"
                src={favorites?.urlToImage}
              ></img>
            </div>
            <div className="basis-2/6">
              <h1 className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">Title:</span>
                {favorites?.title}
              </h1>
              <p className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">Description:</span>
                {favorites?.description}
              </p>
              <p className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">Date:</span>
                {favorites?.publishedAt}
              </p>
              <p className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">
                  Source information:
                </span>
                {favorites?.url}
              </p>
            </div>
            <div className="basis-1/6 mx-10">
              <Share url={favorites?.url} />
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Favorite;
