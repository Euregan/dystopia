import './Button.css'

const Button = ({ children, onClick }) => (
  <button className="dystopia-button" onClick={(onClick || (() => {}))()}>
    <span>{children}</span>
  </button>
)

export default Button
