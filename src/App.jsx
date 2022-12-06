/* eslint-disable no-unused-vars */
import Circle from './components/Circle'
import Square from './components/Square'
import Triangle from './components/Triangle'
import Layout from './Layout'

function App() {
  return (
    <div>
      <Layout Geometry={Square} />
      <Layout Geometry={Circle} />

      {/* <Layout>
        <Square />
      </Layout> */}
      {/* <Layout>
        <Circle />
      </Layout>
      <Layout>
        <Triangle />
      </Layout> */}
    </div>
  )
}

export default App
