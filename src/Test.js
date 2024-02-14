import React from 'react';
 
function Test(){
    return( 
         <div className="forpass"> 
            
            <input className="email"placeholder="email-ID/ph.no"/><br/>
            <button className="verification">send verification code</button><br/>
            <input className="newpassword" placeholder="enter new password"/><br/>
            <input className="conpassword" placeholder="confirm password"/> 
         </div>
  )};
  export default Test;