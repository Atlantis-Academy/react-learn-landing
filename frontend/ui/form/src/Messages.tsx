import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Имя',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  job: {
    id: `${scope}.job`,
    defaultMessage: 'Организация',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Телефон',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Спасибо! Мы скоро с вами свяжемся!',
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Необходимо заполнить все поля формы!',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Сообщение',
  },
})
