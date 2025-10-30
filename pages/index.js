import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Whoops!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello from the dark side~" />
      </main>

      <Footer />
    </div>
  )
}
