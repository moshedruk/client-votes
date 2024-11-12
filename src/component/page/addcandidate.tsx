import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addcandidate() {
    
   
    const navigate = useNavigate();
    const [name, setUsername] = useState("");
    const [image, setImage] = useState("");
    
  
    const handlecreat = async () => {
      try {
          const res = await fetch("http://localhost:1871/api/candidates", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem('token')!,

              },
              body: JSON.stringify({name, image}),
            });
            const data = await res.json();
            navigate("/votes");
            return data
      } catch (err) {
          console.log({err})
      }
    }
  
    return (
      <div>
        {" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />        
        <button onClick={handlecreat}>
          Login
        </button>
      </div>
    );
}
