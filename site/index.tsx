import React            from 'react'
import ReactDOM         from 'react-dom'
import { IntlProvider } from 'react-intl'

import App              from './App'

ReactDOM.render(
  <IntlProvider locale='ru' defaultLocale='ru'>
    <App />
  </IntlProvider>,
  document.getElementById('root')
)
