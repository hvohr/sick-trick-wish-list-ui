import './TrickCard.css'

function TrickCard(props) {
  return (
    <section className='trick-card-container'>
      <h2 clasName='trick-name'>{props.name}</h2>
      <h2 clasName='trick-name'>{props.obstacle}</h2>
      <h2 clasName='trick-name'>{props.link}</h2>
    </section>
  )
}

export default TrickCard