import React from "react";
// import Clarifai from "clarifai-nodejs-grpc";


import './ILF.css'


export default function ImageLinkForm(){
    const[input, setStateInput] = React.useState("")
    
    
    function onInputChange(event){
        setStateInput(event.target.value)
    }

    function onButtonSubmit(){
        console.log('click')
        const USER_ID = 'clarifai';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '28bb347c520849b28634977bc093327a';
    const APP_ID = 'main';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'general-image-recognition';
    const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
    const IMAGE_URL = input;
            
        const raw = JSON.stringify({
            "user_app_id": {
            "user_id": "clarifai",
            "app_id": "main"
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': "Key 28bb347c520849b28634977bc093327a"
            },
            body: raw
        };
        
        // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
        // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
        // this will default to the latest version_id
        
        fetch('https://api.clarifai.com/v2/models/general-image-recognition/outputs', requestOptions)
            .then(response => response.text())
            .then(result => {
                return result
            })
            .catch(error => console.log('error', error));
    
    }
    return(
        <div>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange} />
                    <button type="submit"  className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>
                        Detect
                    </button> 
                </div>
            </div>
            <div className="center ma">
                <div>
                    <img src={input} alt="image" height='auto' width='250px' />
                </div>
            </div>
        </div>
    )
}