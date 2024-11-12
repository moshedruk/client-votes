import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

export default function Register() {
  const { user } = useAppSelector((state) => state.user);
  console.log(user)
  const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (user?._id) {
      navigate("/votes");
    }
  }, []);

  const handleRegister = async () => {
    try {
        const res = await fetch("http://localhost:1871/api/users/register", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name, password, isAdmin}),
          });
          const data = await res.json();
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
        placeholder="User Name"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isAdmin}
        onChange={(e) => setIsAdmin(e.target.checked)}
      />
      <button onClick={handleRegister}>
        Login
      </button>
    </div>
  );
}