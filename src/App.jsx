import { useState } from 'react'
import Circle from './components/Circle'
import Square from './components/Square'
import Triangle from './components/Triangle'
import Layout from './Layout'

function App() {
  const [global, setGlobal] = useState({})
  const pullData = data => setGlobal(prev => ({ ...prev, ...data }))

  return (
    <div>
      <Layout Geometry={Square} global={global} pullData={pullData} />
      <Layout Geometry={Circle} global={global} pullData={pullData} />
      <Layout Geometry={Triangle} global={global} pullData={pullData} />
    </div>
  )
}

export default App
