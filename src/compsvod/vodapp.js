import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Vodcontext } from '../context/vodcontext';
import Home from './home';
import Info from './info';
import LayoutVod from './layoutvod';
import VodInfo from './vodinfo';
import VodList from './vodlist';
import VodYear from './vodyear';
import ReactTooltip from 'react-tooltip';

function VodApp(props){

  let [ar,setAr] = useState([])

    return(

        
     

 
  //  <Vodcontext.Provider  value={{ar:ar,setAr:setAr}}>
  <Vodcontext.Provider value={{ar,setAr}}>
        <Router>
        <ReactTooltip />

     <Routes>
       <Route path="/" element={<LayoutVod />}>
         <Route index element={<VodList />} />
         <Route path="/vodlist/:search" element={<VodList />} />
         <Route path="/year/:yyyy" element={<VodYear />} />
        
         <Route path="/video/:id" element={<VodInfo/>} />
       
       </Route>
     </Routes>
   </Router>
    </Vodcontext.Provider>
    )
}

export default VodApp