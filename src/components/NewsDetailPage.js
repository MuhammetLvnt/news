import React from "react";
import { useLocation, Link } from "react-router-dom";

function NewsDetailPage() {
  const location = useLocation();
  const { news } = location?.state;

  return (
    <div>
      <p className="flex justify-center mt-10 border border-l-fuchsia-900 mx-5">
        {news?.content}
      </p>
      <div className="flex justify-center mt-5">
        <Link
          to="/iframe"
          state={{ news }}
          className="bg-sky-400 w-52 h-12 grid place-content-center rounded-md"
        >
          Go to News Source
        </Link>
      </div>
    </div>
  );
}

export default NewsDetailPage;
