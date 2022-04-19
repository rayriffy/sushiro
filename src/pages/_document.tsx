import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

import { Partytown } from '@builder.io/partytown/react'

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <title>SUSHIRO calculator</title>
        <Partytown forward={['dataLayer.push']} />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BNJE80MSRX"
          type="text/partytown"
        ></script>
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-BNJE80MSRX');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
