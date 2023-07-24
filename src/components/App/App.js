import './App.css';
import React from 'react';
import fetchTrick from '../apiCalls'
import { useEffect, useState } from 'react'
import TrickList from '../TrickList/TrickList'

function App() {
  const [tricks, setTricks] = useState([])

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
        <TrickList data={tricks}/>
      </section>
    </main>
  );
}

export default App; 
