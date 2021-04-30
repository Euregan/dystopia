import React from 'react'

import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    color: { control: 'color' },
  },
}

const CardStory = ({ ...args }) => (
  <Card {...args}>This is a simple card with some simple content</Card>
)

export const Basic = CardStory.bind({})
Basic.args = {}

export const WithColor = CardStory.bind({})
WithColor.args = {
  color: '#00ff00',
}

export const WithTitle = CardStory.bind({})
WithTitle.args = {
  title: 'This is its title',
}

export const WithTitleAndColor = CardStory.bind({})
WithTitleAndColor.args = {
  title: 'This is its title',
  color: '#00ff00',
}
