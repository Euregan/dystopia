import './Page.css'

const Page = ({ menu, actions, children }) => (
  <>
    <header className="dystopia-layout-header">
      <nav className="dystopia-layout-nav">
        <ul>
          {(menu || []).map((item) => (
            <li key={item.key}>{item}</li>
          ))}
        </ul>
      </nav>
      <ul className="dystopia-layout-actions">
        {(actions || []).map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
    </header>
    <main className="dystopia-layout-main">{children}</main>
  </>
)

export default Page
