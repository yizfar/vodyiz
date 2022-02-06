import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate,
    Link
  } from "react-router-dom";
function VodItem(props){
   let item = props.item
    return(
        <div   id="hoverone" key={item.imdbID} className="col-lg-4 col-md-6 p-2 text-center " >
        <h3>{item.Title}</h3>
        {/* <img  src={item.Poster} alt="pic" height="250px" width="200px" /> */}
       <Link to={"/video/"+item.imdbID}> <img  src=  {item.Poster == "N/A"
              ? "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              : item.Poster}   alt="pic"   /></Link> 

      </div>
    )
}

export default VodItem