import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Обратная связь',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'отправить заявку',
  },
})
