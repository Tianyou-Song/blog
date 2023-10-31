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

  const logInOutButton = cookies.loggedIn ? (
    <span
      onClick={() => {
        setCookie('loggedIn', false, {
          path: '/',
        });
      }}
    >
      click here to log out
    </span>
  ) : (
    <span
      onClick={() => {
        setCookie('loggedIn', true, {
          path: '/',
        });
      }}
    >
      click here to log in
    </span>
  );

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        {logInOutButton}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
