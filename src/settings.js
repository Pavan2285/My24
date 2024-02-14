import React from 'react';
import { useNavigate } from 'react-router-dom';
 
 function Settings(){
    const navigate=useNavigate();
    const back=()=>{
        navigate('/profile');
    }
    return(
        <div class="settingsbackground">
            <h1 class="sticky2">Settings</h1>
            <button class="backbtn1"onClick={()=>back()}>Back</button>
            {/* <button class="changepass">change password </button> */}
            <button class="changepass">change password </button>
            <button class="changemail">change E-mail </button>
            <button class="Downloads">Downloads</button>
            <img src="assets/tech.jpg" class="settingsbackground"></img>

            
        </div>
    )
 }
 export default Settings;