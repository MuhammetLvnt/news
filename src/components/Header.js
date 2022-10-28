import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Header(props) {
  const { setValues } = props;

  return (
    <div className="flex flex-row bg-green-500  h-16 ">
      <div className="place-content-center grid basis-1/2">
        <ul
          className=" flex justify-center md:flex-row flex-wrap list-none  text-white"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <Link to="/" className="bg-indigo-800 w-40 p-1 flex justify-center">
              Home Page
            </Link>
          </li>
          <li className="nav-item ml-5" role="presentation">
            <Link
              to="/favorites"
              className="bg-indigo-800 w-40 p-1 flex justify-center"
            >
              Favorite
            </Link>
          </li>
        </ul>
      </div>
      <div className="basis-1/2">
        <Search setValues={setValues} />
      </div>
    </div>
  );
}

export default Header;
