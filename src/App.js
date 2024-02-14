// import React,{useState} from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {

//   const[signupusername,setusername]=useState("");
//   const[signuppassword,setpassword]=useState("");
//   const[signupconfirmpassword,setconfirmpassword]=useState("");
//   const[signupage,setage]=useState(0);
//   const[signupgender,setgender]=useState("");
//   const[status,setStatus]=useState("Login");
//   const[loginpassword,setloginpassword]=useState("");
//   const[loginusername,setloginusername]=useState("");
   
   
             
//   const userName=(e)=>{
//     setusername(e.target.value);
//   }
//   const password=(e)=>{
//     setpassword(e.target.value);
//   }
//   const confirmpassword=(e)=>{
//     setconfirmpassword(e.target.value);
//   }
//   const age=(e)=>{
//     setage(e.target.value);
//   }
//   const gender=(e)=>{
//     setgender(e.target.value);
//   }
//   const loguserName=(e)=>{
//     setloginusername(e.target.value)
//   }
//   const logpassword=(e)=>{
//     setloginpassword(e.target.value)
//   }
//   const clickhere=()=>{
//     const obj={
//       userName:loginusername,
//       password:loginpassword

//     }
//     axios.post('http://localhost:8080/login',obj)
//     .then((res)=>{
//        alert(res.data);
//     })
//   }
//   const signupbutton=()=>{
//     setStatus("Signup");
//   }
//   const signup=()=>{
//     const obj={
//       userName:signupusername,
//       password:signuppassword,
//       confirmPassword:signupconfirmpassword,
//       gender:signupgender,
//       age:signupage,
//       id: 2
//     }
//     axios.post('http://localhost:8080/signup',obj)
//     .then((res)=>{
//       console.log(res.data);
//     })
//   }
   
//   return (
//     <div>
//         {
//         (status==="Login")?
//         <div class="frontpage">
//             <div><input   placeholder="userName" onChange={(e)=>loguserName(e)}/></div>
//             <div> 
//             <input placeholder="password"onChange={(e)=>logpassword(e)}/></div>
//             <div> 
//         <button onClick={(e)=>clickhere(e)}>Login</button></div><span>
//         <button onClick={()=>signupbutton()}>Signup</button> 
//         </span>
         
         
//          <div><button>FrgotPassword</button></div>
//         </div>
//         :
//         <div>
//             <input placeholder="userId" onChange={(e)=>userName(e)}/>
//             <input placeholder="password"onChange={(e)=>password(e)}/>
//             <input placeholder="confirm-password"onChange={(e)=>confirmpassword(e)}/>
//             <input type="radio" name="test"value="male" onChange={(e)=>gender(e)}/>Male
//             <input type="radio" name="test"value="female"onChange={(e)=>gender(e)}/>female
//             <input placeholder="Age"onChange={(e)=>age(e)}/>
//             <button onClick={()=>signup()}>Submit</button>
//         </div>
//     }
        
//     </div>
//   );
// }

// export default App;

import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import New from './New';
import Test from './Test';
import Dashboard from './dashboard';
import Upload from './upload';
import Profile from './profile';
import Settings from './settings';
import Flashtoday from './flashtoday';
import Editpro from './editpro';
import Notification from './notification';
import CameraComponent from './webcam'
 
import './App.css';


export default function App() {
  
    return (
      <>
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/new" element={<New />}/>
         <Route path="/test" element={<Test />}/>
         <Route path="/dashboard" element={<Dashboard />}/>
         <Route path="/upload"element={<Upload />}/>
         <Route path="/profile"element={<Profile/>}/>
         <Route path="/settings" element={<Settings/>}/>
         <Route path="/flashtoday" element={<Flashtoday/>}/>
         <Route path="/editpro" element={<Editpro/>}/>
         <Route path="/notification" element={<Notification/>}/>
         <Route path="/webacm" element={<CameraComponent/>}/>
      </Routes>
   </>
  );
}