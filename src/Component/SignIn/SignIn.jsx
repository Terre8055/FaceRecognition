import React from "react";
import ReactDom from 'react-dom'
import './SignIn.css'

/*onSubmit used when the form element is submited
*call the handleSubmit function to check the fields
*if fields are inputed call handleSignIn function passed as prop
*/

export default function SignIn({handleSignIn}){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    /*This is a functional component in ReactJS that contains a form submit handler. 
    *The handleSubmit function is called when the form is submitted.
    *it checks if the email and password fields are filled out, and if not, it displays an alert saying "Email and password must be filled out.
    *If the fields are filled, the function handleSignIn("home") is called, passing the parameter "home" to it. 
    */
  
    const handleSubmit = (event) => {
      
      event.preventDefault();//this method is called to prevent the default nature of the form element
      if (!email || !password) {
        alert("Email and password must be filled out.");
        return;
      }
      // handleSignIn("home");//home parameter is passed to the prop function to redirect the route in app.jsxx
      // console.log(password)
      
      fetch('http://localhost:3000/signIn',{ //Post request to endpoint
        method: 'post',
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify({ //stringify body to server
          email: email,
          password: password
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })  
      .then(data => {
        handleSignIn('home');
      })
      .catch(error => {
        alert("error");
        console.error(error);
      });
      
    }

   

   
   

    /* redirectPage function used to create a reroute to the SignUp/Register component. 
    *see APP.jsx for handleSignIn definition
    */

    const redirectPage = () => { 
      handleSignIn("Register")
    }
  
    return (
      <article className= "shadow-5 br3" >
        <main className="pa4 white-50">
          <form className="measure center" onSubmit={handleSubmit} method="post">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              {/* <legend className="f2 fw6 ph0 mh0 ttu">Sign In</legend> */}
              <div className="mt3">
                <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer">
                <input type="checkbox" /> Remember me
              </label>
            </fieldset>
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f5 dib white-50" 
                type="submit" 
                value="Sign in" 
              />
            </div>
            <div className="lh-copy mt3">
              <p className="f5 link dim red db ttu pointer" onClick={redirectPage}>Register</p>   
            </div>
          </form>
        </main>
      </article>
    );
  }
  
