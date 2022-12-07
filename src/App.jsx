import { useEffect, useState } from 'react'
import Circle from './components/Circle'
import Square from './components/Square'
import Triangle from './components/Triangle'

function App() {
  const [geometry, setGeometry] = useState({
    circleSize: 50,
    circleColor: '#05ad54',
    squareSize: 60,
    squareColor: '#b96c00',
    triangleSize: 100,
    triangleColor: '#b4008d'
  })
 const [alert, setAlert] = useState('')
  const {
    circleSize,
    circleColor,
    squareSize,
    squareColor,
    triangleSize,
    triangleColor
  } = geometry

  useEffect(() => {
    if (circleSize === squareSize && squareSize === triangleSize)
      setAlert('same size')
    if (circleColor === squareColor && squareColor === triangleColor)
      setAlert('same color')
  }, [geometry])

  return (
    <div>
      <div className="alert">{alert}</div>
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
      <hr />
      <Square size={squareSize} color={squareColor} />
      <input
        type="number"
        onChange={({ target: { value } }) =>
          setGeometry(prev => ({ ...prev, squareSize: value }))
        }
        value={squareSize}
      />
      <input
        type="color"
        onChange={({ target: { value } }) =>
          setGeometry(prev => ({ ...prev, squareColor: value }))
        }
        value={squareColor}
      />
      <hr />
      <Triangle size={triangleSize} color={triangleColor} />
      <input
        type="number"
        onChange={({ target: { value } }) =>
          setGeometry(prev => ({ ...prev, triangleSize: value }))
        }
        value={triangleSize}
      />
      <input
        type="color"
        onChange={({ target: { value } }) =>
          setGeometry(prev => ({ ...prev, triangleColor: value }))
        }
        value={triangleColor}
      />
    </div>
  )
}

export default App
