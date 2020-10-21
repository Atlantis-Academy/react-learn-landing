import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Riverdoc',
  },

  description: {
    id: `${scope}.description`,
    defaultMessage: 'Riverdoc landing',
  },
})
