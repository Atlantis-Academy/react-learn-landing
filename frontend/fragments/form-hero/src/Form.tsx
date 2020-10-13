import React, { useEffect, useState }             from 'react'
import { Box, Column, Layout }                    from '@atlantis-lab/layout'
import { injectIntl }                             from 'react-intl'

import { Button }                                 from '@ui/button'
import { Input, LabelText, MaskEmail, MaskPhone } from '@ui/input'
import { Text }                                   from '@ui/text'
import { theme }                                  from '@ui/theme'

import messages                                   from './Messages'

const Form = ({ intl }: any) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = () => {
    setName('')
    setJob('')
    setPhone('')
    setEmail('')

    if (name && job && phone && email) {
      setSuccess(`${intl.formatMessage(messages.success)}`)
      setIsSubmit(true)

      alert(`Имя: ${name}, организация: ${job}, телефон: ${phone}, email: ${email}`) // eslint-disable-line
      // todo: remove when the server is added
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
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [success, setSuccess])

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
        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.name)}
        />

        <Input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
          theme='hero'
        />

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.job)}
        />
        <Input
          type='text'
          name='job'
          onChange={event => setJob(event.target.value)}
          value={job}
          theme='hero'
        />

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.phone)}
        />
        <Input
          type='text'
          mask={MaskPhone}
          name='phone'
          onChange={event => setPhone(event.target.value)}
          value={phone}
          theme='hero'
        />

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.email)}
        />
        <Input
          type='text'
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
          mask={MaskEmail}
          theme='hero'
        />
        <Box height={20} />
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
            {intl.formatMessage(messages.button)}
          </Text>
        </Button>
      </Column>
    </Layout>
  )
}

export default injectIntl(Form)
