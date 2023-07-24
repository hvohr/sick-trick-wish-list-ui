import './Form.css'
import { useState } from 'react'

function Form(props) {
  const [name, setTrickName] = useState('')
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorialLink] = useState('')

  function submitTrick(event) {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      name,
      obstacle,
      stance,
      tutorial
    }
    props.addTrick(newTrick)
    clearForm()
  }

  function clearForm() {
    setTrickName('')
    setObstacle('')
    setTutorialLink('')
    setStance('')
  }

  return (
    <form className='user-input-container'>
      <div className='stance-container'>
        <select className='stance-select' onChange={event => setStance(event.target.value)}>
          <option label="Choose Your Stance"></option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
      </div>
      <div className='trick-name-container'>
        <input
          type='textArea'
          placeholder="Name of Trick"
          name="trick"
          value={name}
          onChange={event => setTrickName(event.target.value)}
        />
      </div>
      <div className='obstacle-container'>
        <select className='obstacle-select' onChange={event => setObstacle(event.target.value)}>
          <option label="Choose Your Obstacle"></option>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>
      </div>
      <div className='tutorial-link-container'>
        <input
          type='text'
          placeholder="Link to Tutorial"
          name="link"
          value={tutorial}
          onChange={event => setTutorialLink(event.target.value)}
        />
      </div>
      <button type="submit" onClick={event => submitTrick(event)}>Send It!</button>
    </form>
  )
}

export default Form