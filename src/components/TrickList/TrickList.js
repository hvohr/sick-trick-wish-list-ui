import TrickCard from '../TrickCard/TrickCard'

function TrickList(props) {
let filteredTricks = props.data.map((prop) => {
  return (
    <TrickCard key={prop.id} id={prop.id} name={prop.name} obstacle={prop.obstacle} stance={prop.stance} link={prop.tutorial}/>
  )
})
  return (
    {filteredTricks}
  )
}

export default TrickList