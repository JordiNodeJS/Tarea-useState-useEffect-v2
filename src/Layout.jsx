import { useState } from 'react'

const Layout = ({ Geometry }) => {
  const [size, setSize] = useState('100')
  const [color, setColor] = useState('#ee9999')

  const handleSize = ({ target: { value } }) => {
    if (isNaN(value) || +value < 1) value = 100
    setSize(value)
  }

  const handleColor = ({ target: { value } }) => setColor(value)

  return (
    <div>
      <input type="number" onChange={handleSize} value={size} />
      <input type="color" onChange={handleColor} value={color} />
      <Geometry size={size} color={color} />
    </div>
  )
}

export default Layout
