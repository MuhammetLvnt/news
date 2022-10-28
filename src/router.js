import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import NewsDetailPage from "./components/NewsDetailPage";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";
import Search from "./components/Search";
import İFrame from "./components/İFrame";
import Home from "./views/Home";

function router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/newslist" element={<NewsList />}></Route>
        <Route path="/newsitem" element={<NewsItem />}></Route>
        <Route path="/favorites" element={<Favorite />}></Route>
        <Route path="/news-detail-page" element={<NewsDetailPage />}></Route>
        <Route path="/iframe" element={<İFrame />}></Route>
      </Routes>
    </div>
  );
}

export default router;
