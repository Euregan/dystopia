import React from 'react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
  },
}

const CheckboxStory = ({ ...args }) => <Checkbox {...args} />

export const Basic = CheckboxStory.bind({})
Basic.args = {
  label: 'Checkbox',
}
