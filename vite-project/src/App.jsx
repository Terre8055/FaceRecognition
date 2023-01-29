import React from 'react'
import Navigation from './Component/Navigation/Navigation'
import Logo from './Component/Logo/Logo'
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm'
import './App.css'
import Rank from './Component/Rank/Rank'
// import Particle from './particles'


export default function App(){
  return(
    <div className='App'>
      {/* <Particle /> */}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  )

}