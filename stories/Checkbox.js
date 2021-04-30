import './Checkbox.css'

const Checkbox = ({ label, value, onChange }) => (
  <label className="dystopia-checkbox">
    {label}
    <input type="checkbox" checked={value} onChange={() => onChange(!value)} />
  </label>
)

export default Checkbox
