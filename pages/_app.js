import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>Terezie Prchalova | Lifestyle Photographer</title>
        <meta
          name="description"
          content="Lifestyle Photographer with a true passion for visual storytelling. Specializing in weddings and concerts. Based in the captivating city of Brno."
        />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
