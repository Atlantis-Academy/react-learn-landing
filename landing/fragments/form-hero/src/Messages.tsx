import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  formButton: {
    id: `${scope}form.button`,
    defaultMessage: 'Отправить',
  },
  formName: {
    id: `${scope}form.name`,
    defaultMessage: 'Имя',
  },
  formEmail: {
    id: `${scope}form.email`,
    defaultMessage: 'Email',
  },
  formJob: {
    id: `${scope}form.job`,
    defaultMessage: 'Организация',
  },
  formPhone: {
    id: `${scope}form.phone`,
    defaultMessage: 'Телефон',
  },
  formEnd: {
    id: `${scope}form.end`,
    defaultMessage: 'Спасибо! Мы скоро с вами свяжемся!',
  },
  formError: {
    id: `${scope}form.error`,
    defaultMessage: 'Необходимо заполнить все поля формы!',
  },
})
