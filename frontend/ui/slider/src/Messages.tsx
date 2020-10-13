import { defineMessages } from 'react-intl'

import { name as scope }  from '../package.json'

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Автоматизация документооборота — не просто средство оптимизации внутренних процессов, это возможность получить преимущество в условиях жесткой конкуренции. Системы автоматизированного документооборота помогают ускорить процессы, дают руководителям цельную картину по работам компании для принятия как оперативных, так и стратегических решений.',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Отправить заявку',
  },
})
