import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>Terezie Prchalova</title>
      </Head>
      <div>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
