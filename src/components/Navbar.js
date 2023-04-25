import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function Navbar(props) {

  return (

    <div className="links">
      <h2 ><Link to="/" className="anchor"  > Home</Link></h2>
      {/* <a href="#skills">Skill</a> */}
      <h2><Link className="anchor" to="/skill">Skill</Link></h2>
      <h2><Link className="anchor" to="/projects"> Projects  </Link></h2>
      <h2><Link className="anchor" to="/experience"> Experience </Link></h2>
      <h2><Link className="anchor" to="/contact"> Contact me! </Link></h2>
      <label class="switch" >
        <input type="checkbox" onClick={props.handleClick} />
        <span class="slider round"></span>
      </label>
    </div>

  );
}

export default Navbar;
