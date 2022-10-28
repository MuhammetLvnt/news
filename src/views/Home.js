import React, { useState } from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";

function Home() {
  const [values, setValues] = useState([]);
  return (
    <div>
      <Header setValues={setValues} />
      <NewsList values={values} />
      <div className="mt-5"></div>
    </div>
  );
}

export default Home;
