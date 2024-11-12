import React, { useEffect } from 'react'
import { ColumnChart, } from "@opd/g2plot-react";
import { useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

export default function Statistics() {const { user } = useAppSelector((state) => state.user);
const { candidate } = useAppSelector((state) => state.candidate);
const navigate = useNavigate();

useEffect(() => {
  console.log({ isLoggedIn: !!user?._id, isAdmin: !!user?.isAdmin });
  if (user?._id && !user?.isAdmin) navigate("/votes");
  if (!user?._id) navigate("/login");
}, []);

const config = {
  
  xField: "name",
  yField: "votes",
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
};
return (
  <div style={{padding:"70px"}}>
    <h1>Statistics</h1>

    <ColumnChart
      {...config}
      height={400} 
      data={candidate.map((c) => ({ name: c.name, votes: c.votes }))}
    />
  </div>
);
}
