import React, { useContext, useEffect, useRef, useState } from "react";
import { Vodcontext } from "../context/vodcontext";
import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function LayoutVod(props) {
  let params = useParams();

  let searchRef = useRef();

  let nav = useNavigate();

  let { ar, setAr } = useContext(Vodcontext);

  const onSearchClick = () => {
    let search_val = searchRef.current.value;
    nav("/vodlist/" + search_val);
  };
  return (
    <div className="container bg-dark">
      <header
        style={{
          height: "300px",
          backgroundImage: `url("https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        }}
        
        className="row text-center p-5 "
      >
          <Link
              className=" text-danger display-5 "
              to="/"
              data-tip="back to home  page" >
              <FaHome />
            </Link>
        <Link className="col-3 p-2 link" to="/year/1989">
          1989's
        </Link>
        <Link className="col-3 p-2 link" to="/year/2000">
          2000's
        </Link>
        <Link className="col-3 p-2 link" to="/year/2010">
          2010's
        </Link>
        <Link className="col-3 p-2 link" to="/year/2020">
          2020's
        </Link>

        <div class="text-center my-3 p-2">
          <div className="col-md-6 d-flex">
            <Link
              className="p-2 link float-end text-danger display-3 "
              to="/"
            >
              <FaHome />
            </Link>

            <input data-tip="search any movie be name" ref={searchRef} className="form-control " />
            <button onClick={onSearchClick} className="btn btn-warning ">
              Search
            </button>
          </div>
       
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      <footer className="text-center text-info p-4 row "  >
      <hr ></hr>
      <div className="col-4">
      <ul>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
          Help
        </Link></li>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
  Conditions of Use
        </Link></li>
  <li>   <Link className="col-3  link" to="/year/1989">
       
        </Link></li>
</ul>
      </div>
      <div className="col-4">    <ul>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
  Privacy
        </Link></li>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
         Jobs
        </Link></li>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
          1989's
        </Link></li>
</ul></div>
      <div className="col-4">    <ul>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
         About us
        </Link></li>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
        More info
        </Link></li>
  <li>   <Link className="col-3 p-2 link" to="/year/1989">
          Use guide
        </Link></li>
</ul></div>
      </footer>
    </div>
  );
}

export default LayoutVod;
