import '../styles/globals.css'
import Layout from '../components/Layout'
import HeadInfo from '../components/HeadInfo'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <HeadInfo />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
