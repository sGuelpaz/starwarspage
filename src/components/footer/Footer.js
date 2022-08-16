import React from 'react'
import { GiFlexibleStar } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { AiFillCiCircle } from "react-icons/ai"



const Footer = () => {
  return (
    <div className="bg-black text-light row row-cols-md-3 mt-3 m-0 row-cols-sm-1">
      <div className='d-flex justify-content-center align-items-center'>
        <GiFlexibleStar size={120}/>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <strong>Created by: Jhon Estiven Guelpaz Muñoz</strong>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <RiInstagramFill size={60} />
        <RiFacebookCircleFill size={60} />
        <RiYoutubeFill size={60} />
      </div>
    </div>
  )
}

export default Footer