const Square = ({ size = 100, color = 'blue' }) => {
  return (
    <svg width={size} height={size}>
      <rect x="5" y="5" width={size - 10} height={size - 10} fill={color} />
      Square.
    </svg>
  )
}

export default Square
