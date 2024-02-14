import React,{useState} from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Login(){ 

    const navigate = useNavigate();
    
    const[loguserName,setuserName]=useState("");
    const[logpassword,setPassword]=useState(""); 

     const loginuserName=(e)=>{
        setuserName(e.target.value);

    }
    const Password=(e)=>{
        setPassword(e.target.value);

    }
    
    const login=()=>{
        const obj={
            userName:loguserName,
            password:logpassword,
        }
        axios.post('http://localhost:8080/login',obj)
        .then((response)=> {
            alert(response.data);
            if(response.data) {
            navigate('/dashboard') 
            }
        })
    }
    const SignUP=()=>{
        // setStatus=("SignUP");
        navigate('/new')
    }
     
    const ForgotPassword=()=>{
        navigate('/test')

    }
    return( 
        
        <div className="loguser"> 
             
                <input   className="logusername" type="text"placeholder="UserName"onChange={(e)=>loginuserName(e)}/><br></br>
             
                <input className="logpass" type="text"placeholder="Password"onChange={(e)=>Password(e)}/><br></br>
                <button  className="login" onClick={()=>login()}>LOGIN</button>
                <button className="sign" onClick={()=>SignUP()}>SIGNUP</button>
                <button className="forgot" onClick={()=>ForgotPassword()}>ForgotPassword</button>
                <image src= "https://th.bing.com/th/id/OIP.1NkeEsn7HeZdoJXsfeo-BwHaEo?rs=1&pid=ImgDetMain">
                    </image>      
        </div>
        )  
  };
  export default Login;
