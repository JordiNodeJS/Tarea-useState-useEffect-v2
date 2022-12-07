/* eslint-disable no-console */
import { useEffect, useState } from 'react'

const Layout = ({ Geometry }) => {
  const [global, setGlobal] = useState({})
  const [size, setSize] = useState('100')
  const [color, setColor] = useState('#ee9999')
  const pullData = data => setGlobal(prev => ({ ...prev, ...data }))

  const handleSize = ({ target: { value } }) => {
    if (isNaN(value) || +value < 1) value = 100
    setSize(value)
  }

  const handleColor = ({ target: { value } }) => setColor(value)

  useEffect(() => {
    if (global.triangleColor === '#000000') return alert('black')
    console.log(global)
  }, [color])

  return (
    <div>
      <Geometry size={size} color={color} pullData={pullData} />
      <input type="number" onChange={handleSize} value={size} />
      <input type="color" onChange={handleColor} value={color} />
    </div>
  )
}

export default Layout
