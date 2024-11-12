import React, { useEffect, useState } from 'react'
import { fetchlogin } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate()
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!user?._id) return
    navigate('/votes')
  }, [user]);

  useEffect(() => {
    if (user?._id) {
        navigate('/votes')
    }
  }, []);
  

  return (
    <div>
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
      <button onClick={() => dispatch(fetchlogin({ name, password }))}>
        Login
      </button>
    </div>
  );
}
