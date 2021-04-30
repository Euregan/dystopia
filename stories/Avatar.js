import './Avatar.css'

const sizeToPixels = (size) => ({ small: 16, large: 73 }[size])

const Avatar = ({ picture, size }) =>
  picture ? (
    <img
      className="dystopia-avatar-image"
      style={{ height: `${sizeToPixels(size)}px` }}
      src={picture}
    />
  ) : (
    <>
      <svg
        className="dystopia-avatar-blank"
        viewBox={`0 0 ${sizeToPixels(size)} ${sizeToPixels(size)}`}
        style={{ height: `${sizeToPixels(size)}px` }}
      >
        <line x1="0" y1="0" x2={sizeToPixels(size)} y2={sizeToPixels(size)} />
        <line x1="0" y1={sizeToPixels(size)} x2={sizeToPixels(size)} y2="0" />
      </svg>
    </>
  )

export default Avatar
