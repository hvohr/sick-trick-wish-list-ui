import './Form.css'
import { useState } from 'react'

function Form() {
  const [trickName, setTrickName] = useState('')
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorialLink, setTutorialLink] = useState('')

  return (
    <form className='user-input-container'>
      <div className='stance-container'>
        <select onChange={event => setStance(event.target.value)}>
          <option label="Choose Your Stance"></option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
      </div>
      <div className='trick-name-container'>
        <input
          type='text'
          placeholder="Name of Trick"
          name="trick"
          value={trickName}
          onChange={event => setTrickName(event.target.value)}
        />
      </div>
      <div className='obstacle-container'>
        <select onChange={event => setObstacle(event.target.value)}>
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
          value={tutorialLink}
          onChange={event => setTutorialLink(event.target.value)}
        />
      </div>
      <button>Send It!</button>
    </form>
  )
}

export default Form