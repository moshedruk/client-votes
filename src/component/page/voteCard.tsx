
import { Icandidate } from '../../types/candidate'
import {useAppSelector } from '../../redux/store';


import { socket } from '../../main';


interface props {
    candidate:Icandidate
}

export default function VoteCard({candidate}:props) {
  // const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  if (!user) return null;
  const handleVote = async () => {
    try {
      const data = await fetch("http://localhost:1871/api/vote", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage["token"]!,
        },
        body: JSON.stringify({
          candidateId: candidate._id,
          userId: user?._id,
        }),
        
      });
      
       console.log(1111111111111111)
      // dispatch(fetchProfileUpdate(user._id));
      socket.emit("newvote")
      return data
    } catch (err) {
      console.log(err);
    }
  };
    return (
      <div className='vote-card'>
          <h1>{candidate.name}</h1>
          <img src={candidate.image} alt={candidate.name} />
          <p>Votes: {candidate.votes}</p>
          <button onClick={handleVote} >VOTE</button>
      </div>
    )
  }
