// import React from 'react';
// import { useNavigate } from 'react-router-dom';
 
// function Webcam(){
//     const navigate = useNavigate();

//     const webcam=()=>{
//         navigate('/webcam');
//     }
//     return(
//         <div>

 

//              <button onClick={()=>webcam()}>webcam</button>
//         </div>
//     )
// }
// export default Webcam;




import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const navigate=useNavigate();

  
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button>button</button>
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default CameraComponent;
