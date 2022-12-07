import { useEffect } from 'react'

const Triangle = ({ size = 100, color = 'blue', pullData }) => {
  useEffect(() => {
    pullData({ triangleColor: color, triangleSize: size })
  }, [color])

  return (
    <svg height={size} width={size}>
      <polygon
        points={`10,${size - 10} ${size / 2},10 ${size - 10},${size - 10}`}
        fill={color}
      />
      Triangle.
    </svg>
  )
}

export default Triangle
