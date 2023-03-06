import SpiProvider from '@/provider/SpiProvider'
import '@/styles/globals.css'
import Navbar from '../Components/Navbar/index'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SpiProvider>
        <Navbar />
        <Component {...pageProps} />
      </SpiProvider>
    </>
  )
}
