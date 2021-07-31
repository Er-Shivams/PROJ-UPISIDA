import React from "react";
import Typewriter from 'typewriter-effect';
import "./Background.css";
import Button from "../util/Button";
const Background = () =>{
  return (
    <div className="img-div">
                <div className="info">
                <marquee>
                  🔴 Expression of Interest (EOI) For Setting up of Hospitals, Schools, Flatted Factories, Warehouses, Industries, Group Housing, Sports Stadium, Golf Course with Club House, 5 Star Hotels or any other Real Estate Project in the Future Smart Cities - Trans Ganga City, Unnao near Kanpur & Saraswati Hi-Tech City, Prayagraj
                </marquee>
                </div>
      <div className="img-content">
        <Typewriter 
            options={{
            delay: 50,
            deleteSpeed: 1,
            loop: false,
            }}

          onInit={(typewriter) =>{
            typewriter
              .pauseFor(1000)
              .typeString("<h2>Welcome</h2>")
              .typeString(
                "<h1>Uttar Pradesh State Industrial Developement Authority</h1>"
              )
              .pauseFor(1000)
              .pasteString(
                "<p>It is very growing industry of the state and we used to allocate land to the companies for setting theris plants</p>"
              )
              .start();
          }}
          />
        <Button large inverse>Contact us </Button>
      </div>
    </div>
  );
};

export default Background;
