import { useState } from 'react'
import './OptionList.css'
import Checkbox from './Checkbox'
import Flexbox from './Flexbox'

const OptionList = ({ label, options, values, onChange }) => {
  const [filter, setFilter] = useState('')

  return (
    <div className="dystopia-optionlist">
      <div className="dystopia-optionlist-head">{label}</div>
      <Flexbox direction="column" gap="small">
        {options.map((option) => (
          <Checkbox
            label={option.name}
            onChange={(checked) =>
              checked
                ? onChange([...values, option])
                : onChange(values.filter((value) => value.id !== option.id))
            }
            value={
              values
                ? values.map((value) => value.id).includes(option.id)
                : undefined
            }
          />
        ))}
      </Flexbox>
    </div>
  )
}

export default OptionList
