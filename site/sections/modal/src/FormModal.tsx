import React, { useEffect, useState } from 'react'
import { injectIntl }                 from 'react-intl'

import InputEmailText                 from './InputEmailText'
import InputMsgText                   from './InputMsgText'
import InputNameText                  from './InputNameText'
import messages                       from './Messages'
import { Button }                     from '../../../ui/Button'
import { Box }                        from '../../../ui/layout/Box'
import { Column, Row }                from '../../../ui/layout/Layout'
import { Input, TextArea }            from '../../../ui/modal/Form'
import { Text }                       from '../../../ui/text/Text'
import { theme }                      from '../../../ui/theme'

const FormModal = ({ intl }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [end, setEnd] = useState('')

  const handleForm = (event: any) => {
    event.preventDefault()

    setName('')
    setEmail('')
    setMsg('')

    if (name && email && msg) {
      setEnd(`${intl.formatMessage(messages.formEnd)}`)

      console.log(name, email, msg)
    } else {
      setEnd(`${intl.formatMessage(messages.formErr)}`)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEnd('')
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [end])

  return (
    <form onSubmit={handleForm}>
      <Column>
        <Text
          fontSize={theme.fontSize.xs}
          color={theme.colors.black}
          fontFamily={theme.fontFamily.text}
        >
          {end}
        </Text>
        <InputNameText />
        <Input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <Box height={20} />
        <InputEmailText />
        <Input
          type='email'
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <Box height={20} />
        <InputMsgText />
        <TextArea name='message' onChange={event => setMsg(event.target.value)} value={msg} />
        <Box height={20} />
        <Row>
          <Button>
            <Text
              color={theme.colors.white}
              fontFamily={theme.fontFamily.text}
              fontSize={theme.fontSize.xs}
              letterSpacing='0.05em'
            >
              {intl.formatMessage(messages.button)}
            </Text>
          </Button>
        </Row>
      </Column>
    </form>
  )
}

export default injectIntl(FormModal)
