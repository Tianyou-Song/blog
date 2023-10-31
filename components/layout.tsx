import { useCookies } from 'react-cookie';
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const [cookies, setCookie] = useCookies(['loggedIn']);

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <span
          onClick={() => {
            setCookie('loggedIn', !cookies.loggedIn, {
              path: '/',
            });
          }}
        >
          click here to log {cookies.loggedIn ? 'out' : 'in'}
        </span>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
