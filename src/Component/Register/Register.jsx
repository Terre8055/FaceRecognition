import React from "react";

export default function Register({handleSignIn}){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");

  
    const handleSubmit = (event) => {
      event.preventDefault();//this method is called to prevent the default nature of the form element
      if (!email || !password || !name) {
        alert("Fields must be filled out.");
        return;
      }
        //   handleSignIn("SignIn");//home parameter is passed to the prop function to redirect the route in app.jsxx
      fetch('http://localhost:3000/register',{ //Post request to endpoint
        method: 'post',
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify({ //stringify body to server
          name : name,
          email: email,
          password: password
        })
      })
      .then(response => response.json())  //response we recieve from server to be stringified
      .then(data => { 
            const user = data.find(d => d.email === email || d.name === name); //loop through the response from the database
            if (user){
                alert("success"); //user found alert success and reroute to signIn page
                handleSignIn("SignIn");
            }else{
                alert("Registration Failed"); //User details not logged error msg
            }
         })  

         //TODO: Create Database to store fields
    };
    return(
        <article className="shadow-5 br3">
            <main className="pa4 white-80">
                <form action="sign-up_submit" method="post" accept-charset="utf-8" onSubmit={handleSubmit}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f3" for="name">Full name</label>
                        <input 
                            className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
                            type="name" 
                            name="name"  
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                        <input 
                            className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="password">Password</label>
                        <input 
                            className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    </fieldset>
                    <div className="mt3">
                        <input 
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f5 dib white-50" 
                            type="submit" 
                            value="Sign Up" 
                        />
                    </div>
                </form>
            </main>
        </article>
    )
}