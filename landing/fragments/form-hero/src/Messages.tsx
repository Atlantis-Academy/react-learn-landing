import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Отправить',
  },
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
  declined: {
    id: `${scope}.declined`,
    defaultMessage: 'Необходимо заполнить все поля формы!',
  },
})
