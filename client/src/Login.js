import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
const Login = () => {
    // const [logged,setLogged]=useState(0);
    const history=useHistory();
    const adminUser = {
        username: "sparsh",
        password: "1234"
    }
    const [error,setError]=useState();
    const [details,setDetails]=useState({username:"",password:""});
    const Login = details => {
        console.log(details);
    }
    const handleSubmit = e => {
        e.preventDefault();
        Login(details)
        if(details.username.toUpperCase()===adminUser.username.toUpperCase() && details.password===adminUser.password){
            console.log("yes");
            // setLogged(1);
            history.push({pathname:'/add',state:1})
        }else{
            setError(1)
        }
    }
    return (
        <div className="Login">
            <nav className="navbar nav">
        <div className="container-fluid">
        <Link to="/" className="title">CineReview</Link>
        </div>
      </nav>
      <div className="body">
            <form className="loginform" onSubmit={handleSubmit}>
                <label className="label">Username : </label>
                <input className="username" autoComplete="username" value={details.username} type="text" required placeholder="Enter Your Username" onChange={e => setDetails({...details,username:e.target.value})}></input>
                <label className="label">Password : </label> 
                <input autoComplete="current-password" className="password" value={details.password } type="password" required placeholder="Enter Your Password" onChange={e => setDetails({...details,password:e.target.value})}></input>
                {error && <div className="err">
                        Wrong password or username
                    </div>}
                <button className="loginbutton">Log In</button>
                
            </form>
            
            
      </div>
        </div>
        
    );
}
 
export default Login;