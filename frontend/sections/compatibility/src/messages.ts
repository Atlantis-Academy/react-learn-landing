import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Совместимость Riverdoc с другими системами',
  },

  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Система совместима с офисными пакетами MS Office, Adobe Arcobat, 1С, Битрикс24, AmoCRM (и другими SaaS), а также с форматами (Word, Excel, Powerpoint, Acrobat)',
  },
})
