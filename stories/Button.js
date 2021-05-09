import './Button.css'

const Button = ({ children, onClick }) => (
  <button className="dystopia-button" onClick={(onClick || (() => {}))()}>
    {children}
  </button>
)

export default Button
