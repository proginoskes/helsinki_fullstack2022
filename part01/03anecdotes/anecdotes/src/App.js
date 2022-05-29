import { useState } from 'react'
import Controls from './components/Controls'
import Anecdote from './components/Anecdote'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));


  const btn_info = {
    num_anecdotes: anecdotes.length,
    btns: [
      {
        text: "new anecdote",
        func: setSelected
      },
      {
        text: "vote",
        data: votes,
        anecdote: selected,
        func: setVotes
      }
    ]
  }

  return (
    <div>
      <Anecdote caption="Anecdote of the day" anecdote={anecdotes[selected]} vote_num={votes[selected]}/>
      <Controls btn_info = {btn_info}/>
      <Anecdote caption="Anecdote with the most votes" anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} vote_num={Math.max(...votes)}/>
    </div>
  )
}

export default App;