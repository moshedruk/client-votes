import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { Icandidate } from '../../types/candidate';
import VoteCard from './voteCard';
import { fetchCandidates } from '../../redux/slices/candidateSlice';


export default function Votes() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { candidate } = useAppSelector((state) => state.candidate);
  console.log(candidate)
  const navigate = useNavigate();
  console.log("dfdfffffffffffffd")
  
  useEffect(() => {
    if (!user?._id) {
        navigate('/login') 
    }    
    dispatch(fetchCandidates())
  }, []);
  return (<div className="vote-list">
    {candidate.length && candidate.map((candidate: Icandidate) => (
      <VoteCard key={candidate._id} candidate={candidate} />
    ))}
  </div>);
}
