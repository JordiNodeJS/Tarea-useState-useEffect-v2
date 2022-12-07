/* eslint-disable no-console */
import { useEffect, useState } from 'react'

const Layout = ({ Geometry, global, pullData }) => {
  const [size, setSize] = useState('100')
  const [color, setColor] = useState('#ee9999')
  const [alertColor, setAlertColor] = useState('')
  const [alertSize, setAlertSize] = useState('')

  const handleSize = ({ target: { value } }) => {
    if (isNaN(value) || +value < 1) value = 100
    setSize(value)
  }
  const handleColor = ({ target: { value } }) => setColor(value)

  useEffect(() => {
    const { triangleColor, squareColor, circleColor } = global
    triangleColor === squareColor && squareColor === circleColor
      ? setAlertColor(<p>same color</p>)
      : setAlertColor('')

    const { triangleSize, squareSize, circleSize } = global
    triangleSize === squareSize && squareSize === circleSize
      ? setAlertSize(<p>same size</p>)
      : setAlertSize('')
  }, [color, size])

  return (
    <div>
      <Geometry size={size} color={color} pullData={pullData} />
      <input type="number" onChange={handleSize} value={size} />
      <input type="color" onChange={handleColor} value={color} />
      <div className="alert">
        {alertColor} {alertSize}
      </div>
    </div>
  )
}

export default Layout
