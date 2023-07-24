import './TrickCard.css'

function TrickCard(props) {
  return (
    <section className='trick-card-container'>
      <h2 className='trick-name'>{props.name}</h2>
      <h2 className='trick-name'>{props.obstacle}</h2>
      <a href={props.link} className='trick-name'>{props.link}</a>
    </section>
  )
}

export default TrickCard