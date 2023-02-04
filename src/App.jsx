import React from 'react'
import Navigation from './Component/Navigation/Navigation'
import Logo from './Component/Logo/Logo'
// import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm'

import './App.css'
import SignIn from './Component/SignIn/SignIn'


 
export default function App(){

  const[Route, setRoute] = React.useState("SignIn")

  function handleSignIn(newRoute){
    setRoute(newRoute);
  }

  return(
    <div className='App'>
      {Route === "SignIn" 
      ? <SignIn handleSignIn={handleSignIn}/>
      : <div>
            <Navigation handleSignIn={handleSignIn}/>
            <Logo />
            {/* <ImageLinkForm /> */}
          </div>
      }
    </div>
  )
}