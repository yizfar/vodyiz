import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Vodcontext } from "../context/vodcontext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,Link
} from "react-router-dom";
import VodItem from "./voditem";

function VodYear(props) {
  let params = useParams();

  
  
 
  let nav = useNavigate()

  let { ar, setAr } = useContext(Vodcontext);

  //  let [ar,setAr] = useState([])
  useEffect(() => {
    doApi();
  }, [params.yyyy]);

  const doApi = async () => {
    let yearQ = params.yyyy;
    console.log(yearQ);
    // let url = `https://www.omdbapi.com/?s=${searchQ}&apikey=9b588812`;
    let url = `https://www.omdbapi.com/?s=bank&y=${yearQ}&apikey=9b588812`;

    let resp = await axios.get(url);
    console.log(resp.data.Search);
    setAr(resp.data.Search);
    nav("/year/"+yearQ);
  };




  return (
    <div className="container bg-black text-info">
      <h1 style={{ textTransform: "capitalize" }} className="p-4 text-center ">
        {/* {yearQ}'s movie list */}
      </h1>

     

      <div className="row">
        {ar.map((item) => {
          return (
            // <div  id="hoverone" key={item.imdbID} className="col-md-4 p-4 text-center">
            //  <h3>{item.Title}</h3>
            //  <Link to={"/video/"+item.imdbID}>   <img  src={item.Poster}    alt="pic"  width={"350px"}  /></Link>
            
            // </div>
            <VodItem item ={item}/>
          );
        })}
      </div>
    </div>
  );
}

export default VodYear;
