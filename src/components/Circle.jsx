const Circle = ({ size = 100, color = 'blue' }) => {
  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - 5) / 2}
        fill={color}
      />
      Circle.
    </svg>
  )
}

export default Circle
