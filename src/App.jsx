import React, { useState } from 'react'
import Learner from './Learner'
import learnersData from './learnersData'
import './App.css'

const App = () => {
  const [learners] = useState(learnersData)

  return (
    <div className="app">
      <h1 className="app-title">Learner Profiles</h1>
      {learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  )
}

export default App