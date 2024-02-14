import React, {useState} from 'react'; 
import axios from 'axios';
function New(){

    const[userName,setuserName]=useState("");
    const[passWord,setPassword]=useState("");
    const[confirmPassword,setconfirmpassword]=useState("");
    const[genders,setGender]=useState("");
    const[signage,setAge]=useState("");
    
    const signusername=(e)=>{ 
        setuserName(e.target.value);

    }
    const signupassword=(e)=>{
        setPassword(e.target.value); 
    }
    const signupConfirmPassword=(e)=>{ 
        setconfirmpassword(e.target.value);
    }
    const gender=(e)=>{
    setGender(e.target.value);
    }
    const age=(e)=>{
        setAge(e.target.value);
    }
    const Signupbutton=()=>{ 
        const obj={
            userName:userName,
            password:passWord,
            confirmPassword:confirmPassword,
            gender:genders,
            age:signage
        }
        axios.post('http://localhost:8080/signup',obj)
        .then((res)=>{
            console.log(res.data);

        })

    }
     
    return(
        <div className="signuppage">
            
            <input className="signname" type="text "placeholder="userName" onChange={(e)=>signusername(e)}/> <br></br>
            <input className="signpass"type="text "placeholder="password" onChange={(e)=>signupassword(e)}/> <br></br>
            <input className="confirmpass"type="text "placeholder="confirmPassword" onChange={(e)=>signupConfirmPassword(e)}/> <br></br>
            <input className="radios"type="radio" name="test"value="male" onChange={(e)=>gender(e)}/>Male
            <input type="radio" name="test"value="female"onChange={(e)=>gender(e)}/>female<br></br>
            <input className="ages"PlaceHolder="age"onChange={(e)=>age(e)}/><br></br>
            <button className="signbutton"onClick={()=>Signupbutton()}>Signup</button> <br></br>
        </div>
    )
  };
  export default New;
