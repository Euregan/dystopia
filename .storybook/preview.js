import '../firacode.css'
import '../global.css'
import { themes } from '@storybook/theming'

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'dystopia',
    values: [
      { name: 'dystopia', value: 'linear-gradient(to left, #0b0b2b, #210c1e)' },
    ],
  },
  docs: {
    theme: themes.dark,
  },
}
