import React from "react";
import { useLocation } from "react-router-dom";

export default function İFrame() {
  const location = useLocation();
  const { news } = location?.state;

  return (
    <div>
      <iframe src={news.url} className="w-[1500px] h-[1500px]"></iframe>
    </div>
  );
}
