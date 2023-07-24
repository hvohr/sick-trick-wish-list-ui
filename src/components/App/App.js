import './App.css';
import React from 'react';
import fetchTrick from '../apiCalls'
import { useEffect, useState } from 'react'
import TrickList from '../TrickList/TrickList'
import Form from '../Form/Form'

function App() {
  const [tricks, setTricks] = useState([])

  function showTricks() {
    return (
      fetchTrick().then(
        data => setTricks(data)
      )
    )
  }

  function addTrick(newTrick) {
    return (
      setTricks([...tricks, newTrick])
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
        <Form addTrick={addTrick}/>
        {tricks.length !==0 && <TrickList data={tricks}/>}
      </section>
    </main>
  );
}

export default App; 
