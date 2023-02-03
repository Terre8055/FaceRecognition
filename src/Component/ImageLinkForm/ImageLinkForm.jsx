import React from "react";

import './ILF.css'



export default function ImageLinkForm() {
  const [input, setStateInput] = React.useState("");
  const [faceSentiment, setFaceSentiment] = React.useState('');

  function onInputChange(event) {
    setStateInput(event.target.value);
  }

 function onButtonSubmit() {
    console.log("click");
   
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "facebook",
        "app_id": "detic"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": input
                  }
              }
          }
      ]
    });
    const apiKey = 'Key 33fc33ad7cc042618addc502b9db110f'
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': apiKey
        },
        body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(`https://api.clarifai.com/v2/models/face-sentiment-recognition/versions/a5d7776f0c064a41b48c3ce039049f65/outputs`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const data = result.outputs[0].data.concepts;
        let highestProbability = 0;
        let highestProbabilitySentiment = '';
        data.forEach(concept => {
          if (concept.value > highestProbability) {
            highestProbability = concept.value;
            highestProbabilitySentiment = concept.name;
          }
        });

        setFaceSentiment(highestProbabilitySentiment);
      })
      .catch(error => console.log('error', error));

  } 
    return(
        <div>
            <p className="sent f3">
                 {faceSentiment || 'This AI will detect emotions in your pictures'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input placeholder="Paste image link" type="text" className="f4 pa2 w-70 center" onChange={onInputChange} />
                    <button type="submit"  className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>
                        Detect
                    </button> 
                </div>
            </div>
            <div className="center ma">
                <div>
                    <img src={input} alt="image" height='auto' width='250px' className="link-img"/>
                </div>
            </div>
        </div>
    )
}

