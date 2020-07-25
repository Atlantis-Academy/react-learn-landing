import MaskedInput                    from 'react-text-mask'
import emailMask                      from 'text-mask-addons/dist/emailMask'
import React, { useEffect, useState } from 'react'
import { injectIntl }                 from 'react-intl'

import LabelText                      from './LabelText'
import messages                       from './Messages'
import { Button }                     from '../../../ui/Button'
import { Box }                        from '../../../ui/layout/Box'
import { Column, Row }                from '../../../ui/layout/Layout'
import { Input, TextArea }            from '../../../ui/modal/Form'
import { Text }                       from '../../../ui/text/Text'
import { theme }                      from '../../../ui/theme'

const FormModal = ({ intl, showModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [end, setEnd] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = (event: any) => {
    event.preventDefault()

    setName('')
    setEmail('')
    setMsg('')

    if (name && email && msg) {
      setEnd(`${intl.formatMessage(messages.formEnd)}`)
      setIsSubmit(true)
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

  useEffect(() => {
    if (isSubmit) {
      const timeOut = setTimeout(() => {
        showModal(false)
      }, 3000)
      return () => clearTimeout(timeOut)
    }
    return () => clearTimeout()
  }, [end])

  return (
    <form onSubmit={handleForm}>
      <Column>
        <Row justifyContent='center'>
          <Text
            fontSize={theme.fontSize.m}
            color={isSubmit ? theme.colors.whiteBlue : theme.colors.error}
            fontFamily={theme.fontFamily.text}
          >
            {end}
          </Text>
        </Row>
        <LabelText text={intl.formatMessage(messages.formName)} />
        <Input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <Box height={20} />
        <LabelText text={intl.formatMessage(messages.formEmail)} />
        <MaskedInput
          mask={emailMask}
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
          render={(ref, props) => <Input ref={ref} {...props} />}
        />
        <Box height={20} />
        <LabelText text={intl.formatMessage(messages.formMsg)} />
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
