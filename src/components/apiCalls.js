async function fetchTrick() {
  const response = await fetch('http://localhost:3001/api/v1/tricks')
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}


export default fetchTrick