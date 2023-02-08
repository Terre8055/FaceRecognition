import React from 'react'
import ReactDom from 'react-dom'
import Navigation from './Component/Navigation/Navigation'
import Logo from './Component/Logo/Logo'
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm'

import './App.css'
import SignIn from './Component/SignIn/SignIn'
import Register from './Component/Register/Register'


 
export default function App(){
  /*default state for route==sign in ie=> When user 
  *makes a GET request to that endpoint, server displays 
  *signIn page.
  */

  const[Route, setRoute] = React.useState("SignIn")

  const handleSignIn = (newRoute) =>{
    setRoute(newRoute);
  }
  
  // React.useEffect(() => {
  //   fetch('http://localhost:3000/')
  //    .then(resp => resp.json())
  //    .then(data => console.log(data))
  // }, [])

  return(
    <div className='App'>
        {Route === "SignIn" 
      ? <SignIn handleSignIn={handleSignIn}/>
      //we pass the handlesignin function as prop to the signIn and Navigation component
      : Route === "Register" 
      ?<Register handleSignIn={handleSignIn} />
      : <div>
            <Navigation handleSignIn={handleSignIn}/> 
            <Logo />
            <ImageLinkForm />
          </div>
      }
    </div>
  )
}