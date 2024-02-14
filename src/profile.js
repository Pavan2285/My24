import React from 'react';
import {useNavigate } from 'react-router-dom'; 
function Profile(){

    const navigate = useNavigate();
     
    const Settings=()=>{
        navigate('/Settings');
    }
    const back=()=>{
        navigate('/dashboard');
    }
    const editpro=()=>{
        navigate('/editpro');
    }
     return(
        <div class="probackground">
              
            <h1 class="sticky2">Profile</h1><br></br><br></br>
            <br></br><br></br>
            <img class="proimage"src="assets/image.jpg"alt=""></img> 
            <button class="postbtn1">Post's </button> 
             {/* <button  >Edit profile</button> */}
            <image src="assets\image.jpg"alt="photo" ></image><br></br>
            <img src=" "alt=""></img><br></br>
            <button class="settingsbtn1"onClick={()=>Settings()}><i class="fa fa-gear"></i>Settings</button>
            <button class="backbtn1"onClick={()=>back()}><i class="fa fa-arrow-circle-left"></i>Back</button>
            <button class ="namebtn1"><i class="fa fa-camera"></i>Name</button> 
            <button class="editpro"onClick={()=>editpro()}><i class="material-icons" ></i>Edit Profile</button>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                </link> 

        </div>
    )
};
export default Profile;