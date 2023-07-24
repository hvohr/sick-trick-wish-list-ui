import './App.css';
import React from 'react';
import fetchTrick from '../apiCalls'
import { useEffect, useState } from 'react'
import TrickList from '../TrickList/TrickList'
import Form from '../Form/Form'

function App() {
  const [tricks, setTricks] = useState([])
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [link, setLink] = useState('')

  function showTricks() {
    return (
      fetchTrick().then(
        data => setTricks(data)
      )
    )
  }

  useEffect(() => {
    showTricks()
  }, [])


  return (
    <main>
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
      <section>
        <Form />
        <TrickList data={tricks}/>
      </section>
    </main>
  );
}

export default App; 
