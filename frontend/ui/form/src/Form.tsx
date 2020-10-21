import React, { useEffect, useState }                       from 'react'
import { Column, Layout }                                   from '@atlantis-lab/layout'
import { injectIntl }                                       from 'react-intl'

import { Button }                                           from '@ui/button'
import { Input, LabelText, MaskEmail, MaskPhone, TextArea } from '@ui/input'
import { Text }                                             from '@ui/text'

import messages                                             from './Messages'

const Form = ({ intl, context, textButton, onClose }: any) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = () => {
    setName('')
    setJob('')
    setPhone('')
    setEmail('')
    setMessage('')

    if (name && email) {
      setSuccess(`${intl.formatMessage(messages.success)}`)
      setIsSubmit(true)

      alert(
        // eslint-disable-line
        `Имя: ${name}, организация: ${job}, телефон: ${phone}, email: ${email}, сообщение: ${message}`
      )
      // todo: remove when the server is added
    } else {
      setSuccess(`${intl.formatMessage(messages.required)}`)
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
    <Column as='form' onKeyPress={handleKeyPress}>
      <Text fontSize='normal' color={isSubmit ? 'whiteBlue' : 'error'} fontFamily='text'>
        {success}
      </Text>
      <LabelText context={context} text={intl.formatMessage(messages.name)} />
      <Input
        type='text'
        name='name'
        onChange={event => setName(event.target.value)}
        value={name}
        context={context}
        height={[28, 28, 55]}
        fontSize={['tiny', 'tiny', 'normal']}
        autoComplete='name'
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
            height={[28, 28, 55]}
            fontSize={['tiny', 'tiny', 'normal']}
            autoComplete='organization'
          />
        </>
      )}
      {context === 'modal' ? null : (
        <>
          <LabelText context={context} text={intl.formatMessage(messages.phone)} />
          <Input
            type='phone'
            mask={MaskPhone}
            name='phone'
            onChange={event => setPhone(event.target.value)}
            value={phone}
            context={context}
            height={[28, 28, 55]}
            fontSize={['tiny', 'tiny', 'normal']}
            autoComplete='phone mobile'
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
        height={[28, 28, 55]}
        fontSize={['tiny', 'tiny', 'normal']}
        autoComplete='email'
      />
      {context === 'hero' ? null : (
        <>
          <LabelText context={context} text={intl.formatMessage(messages.message)} />
          <TextArea
            name='message'
            onChange={event => setMessage(event.target.value)}
            value={message}
            height={[70, 110, 130]}
          />
        </>
      )}
      <Layout flexBasis={[10, 10, 20]} />
      <Button
        width={[165, 165, 310]}
        height={[26, 26, 50]}
        border='none'
        bg='whiteBlue'
        onClick={handleForm}
      >
        <Text color='white' fontSize={['small', 'small', 'normal']} fontWeight={600}>
          {textButton}
        </Text>
      </Button>
    </Column>
  )
}

Form.defaultProps = {
  onClose: () => {},
}

export default injectIntl(Form)
