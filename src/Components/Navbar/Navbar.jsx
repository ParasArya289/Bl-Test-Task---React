import React from 'react'
import { FaVirusCovid } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSick } from "react-icons/md";
import { GrTest } from "react-icons/gr";
import { BiDonateBlood } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <FaVirusCovid />
        <div className="links">
        <RxDashboard className='active'/>
        <MdOutlineSick />
        <GrTest />
        <BiDonateBlood />
        <RiMessage3Line />
        </div>
        <CiSettings />
    </nav>
  )
}

export default Navbar
