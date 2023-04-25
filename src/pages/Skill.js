import React, { Component } from 'react';

import { Card, CardContent, Grid } from "@material-ui/core";
import 'animate.css';

export default function Skill(){
    return(
        <div id="skills" >
        
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
        </div>
      
    );
} 