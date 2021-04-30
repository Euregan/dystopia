import './Card.css'

const backgroundToTextColor = (color) => {
  const [r, g, b] = color
    .slice(1)
    .match(/.{1,2}/g)
    .map((color) => parseInt(color, 16))

  return r > 200 || g > 200 || b > 200 || r + g + b > 300 ? 'black' : 'white'
}

const Card = ({ title, color, children }) => (
  <div className="dystopia-card" style={{ borderColor: color }}>
    {title && (
      <div
        className="dystopia-card-title"
        style={{
          borderColor: color,
          backgroundColor: color,
          color: color && backgroundToTextColor(color),
        }}
      >
        {title}
      </div>
    )}
    <div className="dystopia-card-body">{children}</div>
  </div>
)

export default Card
