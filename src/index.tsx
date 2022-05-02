/* @refresh reload */
import { render } from 'solid-js/web'
import { registerSW } from 'virtual:pwa-register'

import { App } from './app/components/app'

import './index.css'

render(() => <App />, document.getElementById('root') as HTMLElement)
registerSW()
