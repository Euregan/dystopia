import './Picture.css'

const sizeToPixels = (size) => ({ small: 16, large: 73 }[size] || size)

const Picture = ({ source, size }) =>
  source ? (
    <img
      className="dystopia-picture-image"
      style={{
        height: `${sizeToPixels(size)}px`,
        width: `${sizeToPixels(size)}px`,
      }}
      src={source}
    />
  ) : (
    <>
      <svg
        className="dystopia-picture-blank"
        viewBox={`0 0 ${sizeToPixels(size)} ${sizeToPixels(size)}`}
        style={{ height: `${sizeToPixels(size)}px` }}
      >
        <line x1="0" y1="0" x2={sizeToPixels(size)} y2={sizeToPixels(size)} />
        <line x1="0" y1={sizeToPixels(size)} x2={sizeToPixels(size)} y2="0" />
      </svg>
    </>
  )

export default Picture
