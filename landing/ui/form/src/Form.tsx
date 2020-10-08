import React, { useEffect, useState }                       from 'react'
import { Column, Layout }                                   from '@atlantis-lab/layout'
import { injectIntl }                                       from 'react-intl'

import { Button }                                           from '@ui/button'
import { Input, LabelText, MaskEmail, MaskPhone, TextArea } from '@ui/input'
import { Text }                                             from '@ui/text'
import { theme }                                            from '@ui/theme'

import messages                                             from './Messages'

const Form = ({ intl, context, textButton, onClose }: any) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [msg, setMsg] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = () => {
    setName('')
    setJob('')
    setPhone('')
    setEmail('')
    setMsg('')

    if (name && email) {
      setSuccess(`${intl.formatMessage(messages.success)}`)
      setIsSubmit(true)
      /* eslint-disable */
      alert(
        `Имя: ${name}, организация: ${job}, телефон: ${phone}, email: ${email}, сообщение: ${msg}`
      )
      // todo: remove when the server is added
      /* eslint-enable */
    } else {
      setSuccess(`${intl.formatMessage(messages.declined)}`)
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleForm()
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSuccess('')
      if (isSubmit) {
        onClose(false)
      }
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [success, setSuccess, onClose])

  return (
    <Layout as='form' onKeyPress={handleKeyPress}>
      <Column>
        <Text
          fontSize={theme.fontSize.xs}
          color={isSubmit ? theme.colors.whiteBlue : theme.colors.error}
          fontFamily={theme.fontFamily.text}
        >
          {success}
        </Text>
        <LabelText context={context} text={intl.formatMessage(messages.name)} />
        <Input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
          context={context}
        />
        {context === 'modal' ? null : (
          <>
            <LabelText context={context} text={intl.formatMessage(messages.job)} />
            <Input
              type='text'
              name='job'
              onChange={event => setJob(event.target.value)}
              value={job}
              context={context}
            />
          </>
        )}
        {context === 'modal' ? null : (
          <>
            <LabelText context={context} text={intl.formatMessage(messages.phone)} />
            <Input
              type='text'
              mask={MaskPhone}
              name='phone'
              onChange={event => setPhone(event.target.value)}
              value={phone}
              context={context}
            />
          </>
        )}
        <LabelText context={context} text={intl.formatMessage(messages.email)} />
        <Input
          type='text'
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
          mask={MaskEmail}
          context={context}
        />
        {context === 'hero' ? null : (
          <>
            <LabelText context={context} text={intl.formatMessage(messages.msg)} />
            <TextArea name='message' onChange={event => setMsg(event.target.value)} value={msg} />
          </>
        )}
        <Layout flexBasis={20} />
        <Button
          width={310}
          height={50}
          border='none'
          bg={theme.colors.whiteBlue}
          onClick={handleForm}
        >
          <Text
            color={theme.colors.white}
            fontFamily={theme.fontFamily.text}
            fontSize={theme.fontSize.xs}
          >
            {textButton}
          </Text>
        </Button>
      </Column>
    </Layout>
  )
}

Form.defaultProps = {
  onClose: () => {},
}

export default injectIntl(Form)
