import React from "react";




export default function Navigation(){
    return (
        <nav style={
            {
                display: 'flex', 
                justifyContent: 'flex-end', 
                position: 'absolute', 
                top: 0, 
                right: 20
            }}>
            <p className="f3 link dim black underline pa3 pointer">
                Sign Out
            </p>
        </nav>
    )
}