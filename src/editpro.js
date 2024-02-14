import React from 'react';
import { useNavigate } from 'react-router-dom';

function Editpro(){
    const navigate=useNavigate();

    const gender=()=>{
        navigate();
    }
    const back=()=>{
        navigate('/profile');
    }
    return(
        <div> 
        <button class="backbtn"onClick={()=>back()}>Back</button>
        <img class="editproimage"src="assets/image.jpg"alt=""></img> 
        <input class="profilename" placeholder="Name"/>
        <input class="profileusername"placeholder="UserName"/> 
        <input type="date"class="dateofbirth"/>
        <input class="profilebio"placeholder="Bio"/>
        <div class="gender">
        <input class="gender"type="radio"  name="test"value="male" onChange={(e)=>gender(e)}/><br/>Male--
        <input class="gender1"type="radio" name="test"value="female"onChange={(e)=>gender(e)}/>female<br/>
        </div>
         
        </div>
    )
}
export default Editpro;