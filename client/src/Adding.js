

import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useLocation,useHistory } from "react-router-dom";


const Adding = () => {
    const history=useHistory();
    const location=useLocation();
    const [info,setInfo]=useState({name:"",genre:"",rating:0})
    useEffect(()=>{
        if(location.state===1){
            // console.log("yes");
        }else{
            history.push('/');
        }
    })
    const handleSubmit= e =>{
        e.preventDefault()
        axios.post("api",{
            name:info.name,
            genre:info.genre,
            rating:info.rating
        }).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    return (
        <div className="Adding">
            <nav className="navbar nav">
        <div className="container-fluid">
          <Link to="/" className="title">CineReview</Link>
        </div>
      </nav>
        <div className="body" onSubmit={handleSubmit}>
            <form className="add">
                <h1 className="heading">Add your Latest Adventure...</h1>
                <label className="label">Movie Name : </label>
                <input className="moviename" autoComplete="movie" type="text" value={info.name} onChange={e=>{
                    setInfo({...info,name:e.target.value})
                }} required placeholder="Enter the movie name"></input>
                <label className="label">Genre : </label>
                <input className="moviename" autoComplete="movie" value={info.genre} type="text" required placeholder="Enter the Genre" onChange={e=>{
                    setInfo({...info,genre:e.target.value})
                }}></input>
                <label className="label">Rating : {info.rating}</label><span></span>
                <input type="range" min={0} max={50} value={info.rating*10} className="slider" required onChange={e=>{
                    setInfo({...info,rating:e.target.value/10})
                }}/>
                <button className="loginbutton">Add Movie</button>
            </form>
        </div>
        </div>
    );
}
 
export default Adding;