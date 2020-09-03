import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  button: {
    id: `${scope}.button`,
    defaultMessage: 'отправить заявку',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Имя',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  msg: {
    id: `${scope}.msg`,
    defaultMessage: 'Сообщение',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Спасибо! Мы скоро с вами свяжемся!',
  },
  declined: {
    id: `${scope}.declined`,
    defaultMessage: 'Заполните все поля формы.',
  },
})
