import React from 'react'
import Card from './Card'
import avatar from './assets/avatar.png'
import Avatar from './Avatar'
import Crt from './Crt'

import Page from './Page'

export default {
  title: 'Components/Layouts/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
}

const title = <h1 key="title">Dystopia</h1>
const about = <a key="about">About</a>
const order = <a key="order">Order</a>

const login = <a key="login">Jack in</a>
const signup = <a key="signup">Register</a>
const crt = <Crt init={true} />

const content = (
  <Card title="1337">
    <div style={{ display: 'flex', gap: 'var(--padding)' }}>
      <Avatar picture={avatar} size="large" />
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--padding)',
        }}
      >
        <li>Hello developer</li>
        <li>Welcome to the wonderful land of the Dystopia Design System</li>
        <li>Hope you'll find it to your liking</li>
      </ul>
    </div>
  </Card>
)

export const Basic = () => <Page menu={[title]}>{content}</Page>

export const WithActions = () => (
  <Page menu={[title]} actions={[signup, login]}>
    {content}
  </Page>
)

export const WithMenu = () => (
  <Page menu={[title, about, order]}>{content}</Page>
)

export const WithMenuAndActions = () => (
  <Page menu={[title, about, order]} actions={[signup, login]}>
    {content}
  </Page>
)

export const WithMenuActionsAndCrt = () => (
  <Page menu={[title, about, order]} actions={[signup, login, crt]}>
    {content}
  </Page>
)
