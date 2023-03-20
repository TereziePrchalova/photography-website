import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Calendly from '../components/Calendly'
import Gallery from '../components/Gallery'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>Terezie Prchalova</title>
      </Head>
      <div>
        <div className='hidden'>
          <Calendly/>
        </div>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </div>
  )
}

export default MyApp
