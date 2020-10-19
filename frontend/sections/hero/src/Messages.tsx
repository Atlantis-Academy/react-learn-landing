import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Riverdoc',
  },
  text: {
    id: `${scope}.text`,
    defaultMessage:
      'Представляет собой готовое решение для автоматизации документооборота, делопроизводства и управления бизнес-процессами, включая контроль исполнительской дисциплины',
  },
  subTitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'Система управления документами и задачами',
  },
  formTitle: {
    id: `${scope}.formTitle`,
    defaultMessage: 'Заявка на демо-доступ',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'отправить',
  },
  buttonMobile: {
    id: `${scope}.buttonMobile`,
    defaultMessage: 'отправить заявку',
  },
})
