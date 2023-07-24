import TrickCard from '../TrickCard/TrickCard'
import './TrickList.css'

function TrickList(props) {
  let filteredTricks = props.data.map((prop) => {
    return (
      <TrickCard
        id={prop.id}
        name={prop.name}
        obstacle={prop.obstacle}
        stance={prop.stance}
        link={prop.tutorial} />
    )
  })
  return (
    <div className='trick-list-container'>
      {filteredTricks}
    </div>
  )
}

export default TrickList