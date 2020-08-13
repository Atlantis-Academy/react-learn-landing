import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  button: {
    id: `${scope}.button`,
    defaultMessage: 'отправить заявку',
  },
  formName: {
    id: `${scope}.formName`,
    defaultMessage: 'Имя',
  },
  formEmail: {
    id: `${scope}.formEmail`,
    defaultMessage: 'Email',
  },
  formMsg: {
    id: `${scope}.formMsg`,
    defaultMessage: 'Сообщение',
  },
  formEnd: {
    id: `${scope}.formEnd`,
    defaultMessage: 'Спасибо! Мы скоро с вами свяжемся!',
  },
  formErr: {
    id: `${scope}.formErr`,
    defaultMessage: 'Заполните все поля формы.',
  },
})
