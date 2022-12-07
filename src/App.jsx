import { useState } from 'react'
import Circle from './components/Circle'
import Square from './components/Square'
import Triangle from './components/Triangle'
import Layout from './Layout'

function App() {
  const [geometry, setGeometry] = useState({
    circleSize: 50,
    circleColor: '#555555'
  })

  const { circleSize, circleColor } = geometry

  return (
    <div>
      <Circle size={circleSize} color={circleColor} />
      <input
        type="number"
        onChange={({ target: { value } }) =>
          setGeometry(prev => ({ ...prev, circleSize: value }))
        }
        value={circleSize}
      />
      <input
        type="color"
        onChange={({ target: { value } }) =>
          setGeometry(prev => ({ ...prev, circleColor: value }))
        }
        value={circleColor}
      />
      {/* <input type="color" onChange={() => handleGlobal({})} value={color} /> */}
      <hr />
      {/* <Square /> */}
      <hr />
      {/* <Triangle /> */}
    </div>
  )
}

export default App
