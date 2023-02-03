import React from "react";
import Tilt from 'react-tilt'
import './Logo.css'
// import brain from './ai.png'

export default function Logo(){
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 100, width: 100, position: 'absolute', top: 25, left: 20}} >
                <div className="Tilt-inner">
                    <img src="/ai.png" alt="logo" />
                </div>
            </Tilt>
        </div>
    )
}