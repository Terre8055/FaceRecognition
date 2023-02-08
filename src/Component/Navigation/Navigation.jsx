import React from "react";

/*handleSignIn function is passed as prop in the Navigation
*component to re-route page to signIn when the SignOut button is clicked
*/



export default function Navigation({handleSignIn}){
    return (
        <nav style={
            {
                display: 'flex', 
                justifyContent: 'flex-end', 
                position: 'absolute', 
                top: 0, 
                right: 20
            }}>
            <p  onClick={()=>handleSignIn("SignIn")} className="f3 link dim black underline pa3 pointer">
                Sign Out
            </p>
        </nav>
    )
}