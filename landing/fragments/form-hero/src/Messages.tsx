import { defineMessages } from 'react-intl'

const namespace: string = 'hero'

export default defineMessages({
  formTitle: {
    id: `${namespace}.formTitle`,
    defaultMessage: 'Заявка на демо-доступ',
  },
  formButton: {
    id: `${namespace}form.button`,
    defaultMessage: 'Отправить',
  },
  formName: {
    id: `${namespace}form.name`,
    defaultMessage: 'Имя',
  },
  formEmail: {
    id: `${namespace}form.email`,
    defaultMessage: 'Email',
  },
  formJob: {
    id: `${namespace}form.job`,
    defaultMessage: 'Организация',
  },
  formPhone: {
    id: `${namespace}form.phone`,
    defaultMessage: 'Телефон',
  },
  formEnd: {
    id: `${namespace}form.end`,
    defaultMessage: 'Спасибо! Мы скоро с вами свяжемся!',
  },
  formError: {
    id: `${namespace}form.error`,
    defaultMessage: 'Необходимо заполнить все поля формы!',
  },
})
