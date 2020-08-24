import React, { useEffect, useState }                             from 'react'
import { injectIntl }                                             from 'react-intl'

import { Button }                                                 from '@ui/button'
import { FormEl }                                                 from '@ui/form-element'
import { Input, LabelText, MaskEmail, StyleInputModal, TextArea } from '@ui/input'
import { Box, Column, Row }                                       from '@ui/layout'
import { Text }                                                   from '@ui/text'
import { theme }                                                  from '@ui/theme'

import messages                                                   from './Messages'

const FormModal = ({ intl, showModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [end, setEnd] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const form = [{ name }, { email }, { msg }]

  const handleForm = () => {
    setName('')
    setEmail('')
    setMsg('')

    if (name && email && msg) {
      setEnd(`${intl.formatMessage(messages.formEnd)}`)
      setIsSubmit(true)
      console.log(form) // eslint-disable-line
    } else {
      setEnd(`${intl.formatMessage(messages.formErr)}`)
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
    <FormEl onKeyPress={handleKeyPress}>
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
        <LabelText
          color={theme.colors.black}
          bg={theme.colors.white}
          text={intl.formatMessage(messages.formName)}
        />
        <StyleInputModal>
          <Input
            type='text'
            name='name'
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </StyleInputModal>
        <Box height={20} />
        <LabelText
          color={theme.colors.black}
          bg={theme.colors.white}
          text={intl.formatMessage(messages.formEmail)}
        />
        <StyleInputModal>
          <MaskEmail onChange={event => setEmail(event.target.value)} value={email} />
        </StyleInputModal>
        <Box height={20} />
        <LabelText
          color={theme.colors.black}
          bg={theme.colors.white}
          text={intl.formatMessage(messages.formMsg)}
        />
        <TextArea name='message' onChange={event => setMsg(event.target.value)} value={msg} />
        <Box height={20} />
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
    </FormEl>
  )
}

export default injectIntl(FormModal)
