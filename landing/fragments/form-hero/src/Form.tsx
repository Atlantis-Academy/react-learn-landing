import React, { useEffect, useState }             from 'react'
import { injectIntl }                             from 'react-intl'

import { Button }                                 from '@ui/button'
import { FormEl }                                 from '@ui/form-element'
import { Input, LabelText, MaskEmail, MaskPhone } from '@ui/input'
import { Box, Column }                            from '@ui/layout'
import { Text }                                   from '@ui/text'
import { theme }                                  from '@ui/theme'

import messages                                   from './Messages'

const Form = ({ intl }: any) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [end, setEnd] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = () => {
    setName('')
    setJob('')
    setPhone('')
    setEmail('')

    if (name && job && phone && email) {
      setEnd(`${intl.formatMessage(messages.formEnd)}`)
      setIsSubmit(true)

      const message = [
        {
          name,
          job,
          phone,
          email,
        },
      ]

      console.log(message) // eslint-disable-line
    } else {
      setEnd(`${intl.formatMessage(messages.formError)}`)
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
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [end])

  return (
    <FormEl onKeyPress={handleKeyPress}>
      <Column>
        <Box display='flex' justifyContent='center' alignItems='center' width={320}>
          <Text
            fontSize={theme.fontSize.xs}
            color={isSubmit ? theme.colors.whiteBlue : theme.colors.error}
            fontFamily={theme.fontFamily.text}
          >
            {end}
          </Text>
        </Box>
        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formName)}
        />

        <Input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
          width={310}
          height={55}
          border={`${theme.border.s}px solid ${theme.colors.whiteBlue}`}
          borderRadius={theme.borderRadius.s}
          bg={theme.colors.dark}
          color={theme.colors.white}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.xs}
        />

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formJob)}
        />
        <Input
          type='text'
          name='job'
          onChange={event => setJob(event.target.value)}
          value={job}
          width={310}
          height={55}
          border={`${theme.border.s}px solid ${theme.colors.whiteBlue}`}
          borderRadius={theme.borderRadius.s}
          bg={theme.colors.dark}
          color={theme.colors.white}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.xs}
        />

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formPhone)}
        />
        <MaskPhone
          type='text'
          name='phone'
          onChange={event => setPhone(event.target.value)}
          value={phone}
          width={310}
          height={55}
          border={`${theme.border.s}px solid ${theme.colors.whiteBlue}`}
          borderRadius={theme.borderRadius.s}
          background={theme.colors.dark}
          color={theme.colors.white}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.xs}
        />

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formEmail)}
        />
        <MaskEmail
          type='text'
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
          width={310}
          height={55}
          border={`${theme.border.s}px solid ${theme.colors.whiteBlue}`}
          borderRadius={theme.borderRadius.s}
          background={theme.colors.dark}
          color={theme.colors.white}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.xs}
        />
        <Box height='20px' />
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
            {intl.formatMessage(messages.formButton)}
          </Text>
        </Button>
      </Column>
    </FormEl>
  )
}

export default injectIntl(Form)
