import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  beginnersTab: {
    id: `${scope}.beginnersTab`,
    defaultMessage: 'Начинающим',
  },
  businessTab: {
    id: `${scope}.businessTab`,
    defaultMessage: 'Малому бизнесу',
  },
  enterpriseTab: {
    id: `${scope}.rightTab`,
    defaultMessage: 'Предприятиям',
  },
  beginnersSpeedTitle: {
    id: `${scope}.beginnersSpeedTitle`,
    defaultMessage: 'Скорость настройки',
  },
  beginnersSpeedText: {
    id: `${scope}.beginnersSpeedText`,
    defaultMessage:
      'Клиенту предоставляется програмный проект «под ключ», с возможным подключением индивидуальных инструментов необходимых в работе отдельного предприятия',
  },
  beginnersPlusTitle: {
    id: `${scope}.beginnersPlusTitle`,
    defaultMessage: 'Плюсы для бизнеса',
  },
  beginnersPlusText: {
    id: `${scope}.beginnersPlusText`,
    defaultMessage:
      'Cистема является готовым решением с простой схемой лицензирования — нет необходимости покупать дополнительные блоки или модули',
  },
  beginnersCostTitle: {
    id: `${scope}.beginnersCostTitle`,
    defaultMessage: 'Стоимость внедрения',
  },
  beginnersCostText: {
    id: `${scope}.beginnersCostText`,
    defaultMessage:
      'Подстраивается под пользователя, в зависимости от нужд и направления и размеров компании, вам не придется переплачивать за неиспользуемые функции',
  },
})
