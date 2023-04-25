import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import 'animate.css';
import { Card, CardContent, Grid } from "@material-ui/core";

function Home(props) {
  return (
    <div className={`home `}>
      <div className={`about ${props.active ? "bgurl" : ""}`}>
        <h2> Hi, My Name is RAAHUL</h2>
        
        
        <div className="prompt">
          <p>Full stack Developer</p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}  
        </div>
      </div>
      {/* <div id="skills" >
        
        <h1> Skills</h1>
            
        <ol className="list">
          <li className="item">
            <Card id="cr">
              <CardContent>
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, 
              MaterialUI, 
            </span>
            </CardContent>
            </Card>
          </li>
          <li className="item">
          <Card id="cr">
              <CardContent>
            <h2>Back-End</h2>
            <span>
              
            </span>
            </CardContent>
            </Card>
          </li>
          <li className="item">
          <Card id="cr">
              <CardContent>
            <h2>Languages</h2>
            <span> Java, Python, C, C++, JavaScript,</span>
            </CardContent>
            </Card>
          </li>
        </ol>
        </div> */}
      </div>
    
  );
}

export default Home;
