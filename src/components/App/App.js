import './App.css';
import React from 'react';
import fetchTrick from '../apiCalls'
import { useEffect, useState } from 'react'
import TrickList from '../TrickList/TrickList'
import NavBar from '../NavBar/NavBar'

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
        <NavBar/>
        <TrickList data={tricks}/>
      </section>
    </main>
  );
}

export default App; 
