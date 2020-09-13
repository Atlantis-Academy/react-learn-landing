import React, { useEffect, useState }            from 'react'
import { Column, Layout, Row }                   from '@atlantis-lab/layout'
import { injectIntl }                            from 'react-intl'

import { Button }                                from '@ui/button'
import { Input, LabelText, MaskEmail, TextArea } from '@ui/input'
import { Text }                                  from '@ui/text'
import { theme }                                 from '@ui/theme'

import messages                                  from './Messages'

const HeaderModalForm = ({ intl, showModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [end, setEnd] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = () => {
    setName('')
    setEmail('')
    setMsg('')

    if (!name && !email && !msg) {
      setEnd(`${intl.formatMessage(messages.declined)}`)
    } else {
      setEnd(`${intl.formatMessage(messages.success)}`)
      setIsSubmit(true)
      alert(`Имя: ${name}, email: ${email}, сообщение: ${msg}`) // eslint-disable-line
      // todo: remove when the server is added
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleForm()
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEnd('')
      if (isSubmit) {
        showModal(false)
      }
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [end, setEnd, showModal])

  return (
    <Layout onKeyPress={handleKeyPress}>
      <Column>
        <Text
          fontSize={theme.fontSize.m}
          color={isSubmit ? theme.colors.whiteBlue : theme.colors.error}
          fontFamily={theme.fontFamily.text}
        >
          {end}
        </Text>
        <LabelText
          color={theme.colors.black}
          bg={theme.colors.white}
          text={intl.formatMessage(messages.name)}
        />
        <Input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
          theme='modal'
        />
        <Layout flexBasis={20} />
        <LabelText
          color={theme.colors.black}
          bg={theme.colors.white}
          text={intl.formatMessage(messages.email)}
        />

        <Input
          onChange={event => setEmail(event.target.value)}
          value={email}
          mask={MaskEmail}
          theme='modal'
        />

        <Layout flexBasis={20} />
        <LabelText
          color={theme.colors.black}
          bg={theme.colors.white}
          text={intl.formatMessage(messages.msg)}
        />
        <TextArea name='message' onChange={event => setMsg(event.target.value)} value={msg} />
        <Layout flexBasis={20} />
        <Row>
          <Button width={210} height={50} onClick={handleForm}>
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
    </Layout>
  )
}

export default injectIntl(HeaderModalForm)
