import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Vodcontext } from "../context/vodcontext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
  Link
} from "react-router-dom";
import VodItem from "./voditem";

function VodList(props) {
  let params = useParams();

  

 
  let nav = useNavigate()

  let { ar, setAr } = useContext(Vodcontext);

  //  let [ar,setAr] = useState([])
  useEffect(() => {
    doApi();
  }, [params.search]);

  const doApi = async () => {
    let searchQ ;
    params.search? searchQ = params.search :  searchQ="bank";

    console.log(searchQ);
    //  let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${searchQ}&image_type=photo&pretty=true`
    let url = `https://www.omdbapi.com/?s=${searchQ}&apikey=9b588812`;
    let resp = await axios.get(url);
    console.log(resp.data.Search);
    setAr(resp.data.Search);
  };

  // const infoClick = () => {
 
  //   nav("/info/"+idhRef);
  // }


  return (
    <div className="container bg-black text-info">
      <h1 style={{ textTransform: "capitalize" }} className="p-4 text-center ">
        movie list
      </h1>

   

      <div className="row">
        {ar.map((item) => {
          return (
          <VodItem item ={item}/>  
          );
        })}
      </div>
    </div>
  );
}

export default VodList;
