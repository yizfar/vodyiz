import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaHome } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,Link
} from "react-router-dom";
import Stars from "./stars";

function VodInfo(props) {
  //  let item1 = props.item;

  let [arinfo, setArinfo] = useState([]);
  let [star, setstar] = useState(1);

  let params = useParams();
  let nav = useNavigate()
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let id = params.id;
    console.log(id);

    let url = `https://www.omdbapi.com/?i=${id}&apikey=9b588812`;
    let resp = await axios.get(url);
    console.log(resp.data);
    console.log(resp.data.imdbRating);
    setstar(resp.data.imdbRating=="N/A"?"": Math.floor(resp.data.imdbRating))
    setArinfo(resp.data);
  };

  return (
    <div
      className='container  p-4 d-flex align-items-center"'
      style={{ color: "red" }}
    >
      <div className="">
        {" "}
        <h2 className="text-center"> {arinfo.Title}</h2>
        <img
          src={
            arinfo.Poster == "N/A"
              ? "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              : arinfo.Poster
          }
          alt="pic"
          width="500px"
        />
      </div>
      <div className=" p-3">
        <h2>
          Storyline :<p> {arinfo.Plot}</p>
        </h2>
        <br></br>
        <h2>Release Date: {arinfo.Year}</h2>
        <h2>Rating: {arinfo.imdbRating}</h2>
      
       {arinfo.imdbRating=="N/A" ? "":<Stars rat ={star} />}
        {/* <Stars rat ={star} /> */}
        
        <button onClick={() => {
            nav(-1);
          }} className='btn btn-dark p-5'>Back   <FaReply className='text-danger h2 ' /></button>
      </div>
     
    </div>
  );
}

export default VodInfo;


