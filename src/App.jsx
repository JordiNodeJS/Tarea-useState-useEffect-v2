import Circle from './components/Circle'
import Square from './components/Square'
import Triangle from './components/Triangle'
import Layout from './Layout'

function App() {
  return (
    <div>
      <Layout Geometry={Square} />
      <Layout Geometry={Circle} />
      <Layout Geometry={Triangle} />
    </div>
  )
}

export default App
