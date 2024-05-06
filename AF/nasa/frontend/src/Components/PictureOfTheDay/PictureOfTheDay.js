import { set } from 'mongoose';
import React from 'react'
import { useState,useEffect } from 'react';
function PictureOfTheDay() {
    const [data,setData]=useState('');
    
    useEffect(()=>{
        setData("Udeesha");
            },[]);
  return (
    

    <div>
       
    </div>
  )
}

export default PictureOfTheDay;