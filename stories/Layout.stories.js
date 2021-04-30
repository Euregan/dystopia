import React from 'react'
import Card from './Card'
import avatar from './assets/avatar.png'
import Avatar from './Avatar'

import Layout from './Layout'

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

const title = <h1 key="title">Dystopia</h1>

const about = <a key="about">About</a>

const order = <a key="order">Order</a>

const login = <a key="login">Jack in</a>

const signup = <a key="signup">Register</a>

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

export const Basic = () => <Layout menu={[title]}>{content}</Layout>

export const WithActions = () => (
  <Layout menu={[title]} actions={[signup, login]}>
    {content}
  </Layout>
)

export const WithMenu = () => (
  <Layout menu={[title, about, order]}>{content}</Layout>
)

export const WithMenuAndActions = () => (
  <Layout menu={[title, about, order]} actions={[signup, login]}>
    {content}
  </Layout>
)
