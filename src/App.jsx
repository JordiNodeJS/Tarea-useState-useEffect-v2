import { useState } from 'react'
import Circle from './components/Circle'
import Square from './components/Square'
import Triangle from './components/Triangle'
import Layout from './Layout'

function App() {
  const [geometry, setGeometry] = useState({ circleSize: 50 })
  const handleGeometry = ({ target: { value } }) =>
    setGeometry(prev => ({ ...prev, circleSize: value }))

  const { circleSize } = geometry

  return (
    <div>
      <Circle size={circleSize} />
      <input type="number" onChange={handleGeometry} value={circleSize} />
      {/* <input type="color" onChange={() => handleGlobal({})} value={color} /> */}
      <hr />
      {/* <Square /> */}
      <hr />
      {/* <Triangle /> */}
    </div>
  )
}

export default App
