import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
        <meta
          name="description"
          content="A project boilerplate, for speed your day"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
