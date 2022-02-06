import React ,{useState,useEffect} from 'react';
import { FaStar } from 'react-icons/fa';

function Stars(props){

  
let rat3=3
    return(
        <div className='my-3'>
          
        {[...Array(props.rat)].map((item,i) => {
          return(
            <span className='text-warning h2'
        
            > <FaStar /></span>
            
          )
        })}
   
      </div>
    
            )
     
    
    
}

export default Stars

