const Triangle = ({ size = 100, color = 'blue' }) => {
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
