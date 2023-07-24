import './NavBar.css'

function NavBar() {
  return (
    <section className='user-input-container'>
      <div className='stance-container'>
        <select label="Choose Your Stance">
          <option label="Choose Your Stance"></option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default NavBar