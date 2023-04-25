import React, { Component } from 'react';
import "../styles/contact.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button } from '@material-ui/core';
import 'animate.css';

function Contact() {
    return (
       
      <div id='conc'>
        <div>
        <form action="https://formsubmit.co/727721euec118@skcet.ac.in" method="POST"  id='for'>
        
        <input type='name' id='name1' placeholder='Your name' name='Name'></input>
        <br></br>
        <input type='email' id='email' placeholder='Email-id' name='Email' required></input>
        <br></br>
        <input type='number' id='phone' placeholder='Phone no.' name='Phone' required></input>
        <br></br>
        <textarea id='message' rows={4} placeholder='how can I help?' name='Query'></textarea>
        <br></br>

        <button type='submit' id='su'>Send</button>
        </form>
        </div>
        </div>
      
    );
  }
  
  export default Contact;