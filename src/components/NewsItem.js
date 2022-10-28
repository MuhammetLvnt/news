import React from "react";
import { Link } from "react-router-dom";
import FavoriteAdd from "./FavoriteAdd";
import Share from "./Share";

export default function NewsItem(props) {
  const { news } = props;

  return (
    <div className="flex flex-row">
      <div className="basis-5/6">
        <Link to="/news-detail-page" state={{ news }}>
          <div className="flex flex-row">
            <div className="basis-1/2">
              <img
                className="w-[500px] mx-10 mt-5"
                src={news?.urlToImage}
              ></img>
            </div>
            <div className="basis-1/2">
              <h1 className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">Title:</span>
                {news?.title}
              </h1>
              <p className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">Description:</span>{" "}
                {news?.description}
              </p>
              <p className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">Date:</span>{" "}
                {news?.publishedAt}
              </p>
              <p className="mx-10 mt-5">
                <span className="bg-gray-800 text-white">
                  Source information:
                </span>
                {news?.url}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="basis-1/6 grid place-content-center">
        <FavoriteAdd news={news} />
      </div>
    </div>
  );
}
