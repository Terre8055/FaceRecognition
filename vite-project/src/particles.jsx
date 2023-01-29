import React from "react";
import './App.css';
import Particles from 'react-particles-js';

export default function Particle(){
    return(
        <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
    )
}
