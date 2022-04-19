import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Fragment } from 'react'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const {
    Component,
    pageProps
  } = props

  return (
    <Fragment>
      <Component {...pageProps} />
      <footer className="pt-10 pb-8 text-gray-400">
        <p className="text-center text-base">
          Version <b>{process.env.buildNumber}</b>
        </p>
        <p className="text-center text-xs sm:text-sm">
          &copy; 2022 Pradit Amusement
        </p>
      </footer>
    </Fragment>
  )
}

export default NextApp
