import { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header app_name={"give feedback"}/>
      <Input 
      buttons={
        {
          "good":[good,setGood],
          "neutral":[neutral,setNeutral],
          "bad":[bad,setBad]
        }
      }/>
      <Statistics responseCounter={good+neutral+bad}
      results={
        {
          "good":{
            "count": good,
            "weight": 1
          },
          "neutral":{
            "count": neutral,
            "weight": 0
          },
          "bad":{
            "count": bad,
            "weight": -1
          }
        }
        }/>
    </div>
  )
}

export default App;