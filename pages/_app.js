import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>Terezie Prchalova</title>
      </Head>
      <div>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </div>
  )
}

export default MyApp
