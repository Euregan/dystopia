import React from 'react'
import avatar from './assets/avatar.png'

import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'large'] },
  },
}

const AvatarStory = ({ ...args }) => <Avatar {...args} />

export const SmallWithPicture = AvatarStory.bind({})
SmallWithPicture.args = {
  picture: avatar,
  size: 'small',
}

export const LargeWithPicture = AvatarStory.bind({})
LargeWithPicture.args = {
  picture: avatar,
  size: 'large',
}

export const SmallWithoutPicture = AvatarStory.bind({})
SmallWithoutPicture.args = {
  size: 'small',
}

export const LargeWithoutPicture = AvatarStory.bind({})
LargeWithoutPicture.args = {
  size: 'large',
}
