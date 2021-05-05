import './Flexbox.css'

const Flexbox = ({ children, gap, direction }) => (
  <div
    className={`dystopia-flexbox dystopia-flexbox-${gap} dystopia-flexbox-${direction}`}
  >
    {children}
  </div>
)

export default Flexbox
