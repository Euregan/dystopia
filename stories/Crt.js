import { useState } from 'react'
import Checkbox from './Checkbox'
import './Crt.css'

const Crt = ({ init }) => {
  const [checked, setChecked] = useState(init)

  return (
    <div className={`dystopia-crt ${checked ? 'on' : 'off'}`}>
      <Checkbox
        label="CRT"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  )
}

export default Crt
