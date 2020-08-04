import { defineMessages } from 'react-intl'

const namespace: string = 'hero'

export default defineMessages({
  title: {
    id: `${namespace}.title`,
    defaultMessage: 'Riverdoc',
  },
  subTitle: {
    id: `${namespace}.subtitle`,
    defaultMessage: 'Система управления документами и задачами',
  },
  text: {
    id: `${namespace}.text`,
    defaultMessage:
      'Представляет собой готовое решение для автоматизации документооборота, делопроизводства и управления бизнес-процессами, включая контроль исполнительской дисциплины',
  },
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
