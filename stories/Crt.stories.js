import React from 'react'

import Crt from './Crt'

export default {
  title: 'Components/Crt',
  component: Crt,
  argTypes: {},
}

const CrtStory = ({ ...args }) => <Crt {...args} />

export const Basic = CrtStory.bind({})
Basic.args = {
  init: true,
}
