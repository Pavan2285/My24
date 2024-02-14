import React from 'react';
import { useNavigate } from 'react-router-dom';

function Notification(){
    const navigate=useNavigate(); 
    const back=()=>{
        navigate('/dashboard');
    }
    const probtn=()=>{
        navigate('/profile');
    }
    return(
        // <div class="headernotify">
        <div class="sticky"id="header">
            <h2>Notification's</h2>
            <button class="backnotify"onClick={()=>back()}>Back</button>

            <button class="uploadbtnnotify" ><i class="fa fa-upload"></i><i class="fa fa-camera"></i><br/>Upload </button> 
            <button class="profilenotify" onClick={()=>probtn()}><i class="fa fa-user" aria-hidden="true"></i><br/>profile</button> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
            </link> 
            <div class="footernotify">
                <p>Footer</p>
            </div>
        </div>
    )
};
export default Notification;