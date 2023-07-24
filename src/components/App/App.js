import './App.css';
import React from 'react';
import fetchTrick from '../apiCalls'
import { useEffect } from 'react'

function App() {

function showTricks() {
  return (
    fetchTrick().then(
      data => console.log(data)
    )
  )
}

useEffect(() => {
  showTricks()
}, [])
  

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
