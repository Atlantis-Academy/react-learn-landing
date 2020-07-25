import MaskedInput                    from 'react-text-mask'
import emailMask                      from 'text-mask-addons/dist/emailMask'
import React, { useEffect, useState } from 'react'
import { injectIntl }                 from 'react-intl'

import messages                       from './Messages'
import { Button }                     from '../../../ui/hero/Button'
import {
  BorderInput,
  FormStyle,
  InputForm,
  InputText,
  InputTextBox,
} from '../../../ui/hero/FormStyle'
import { Box }                        from '../../../ui/layout/Box'
import { Text }                       from '../../../ui/text/Text'
import { theme }                      from '../../../ui/theme'

const Form = ({ intl }: any) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [end, setEnd] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = (event: any) => {
    event.preventDefault()

    setName('')
    setJob('')
    setPhone('')
    setEmail('')

    if (name && job && phone && email) {
      setEnd(`${intl.formatMessage(messages.formEnd)}`)
      setIsSubmit(true)

      console.log(name, job, phone, email)
    } else {
      setEnd(`${intl.formatMessage(messages.formError)}`)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEnd('')
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [end])

  return (
    <FormStyle onSubmit={handleForm}>
      <Box display='flex' justifyContent='center' alignItems='center' width={320}>
        <Text
          fontSize={theme.fontSize.xs}
          color={isSubmit ? theme.colors.whiteBlue : theme.colors.error}
          fontFamily={theme.fontFamily.text}
        >
          {end}
        </Text>
      </Box>
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.formName)}</InputText>
      </InputTextBox>
      <BorderInput>
        <InputForm
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </BorderInput>
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.formJob)}</InputText>
      </InputTextBox>
      <BorderInput>
        <InputForm
          type='text'
          name='job'
          onChange={event => setJob(event.target.value)}
          value={job}
        />
      </BorderInput>
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.formPhone)}</InputText>
      </InputTextBox>
      <BorderInput>
        <MaskedInput
          mask={[
            '+',
            '7',
            ' ',
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
          ]}
          name='phone'
          onChange={event => setPhone(event.target.value)}
          value={phone}
          render={(ref, props) => <InputForm ref={ref} {...props} />}
        />
      </BorderInput>
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.formEmail)}</InputText>
      </InputTextBox>
      <BorderInput>
        <MaskedInput
          mask={emailMask}
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
          render={(ref, props) => <InputForm ref={ref} {...props} />}
        />
      </BorderInput>
      <Box height='20px' />
      <Button border='none' bg={theme.colors.whiteBlue}>
        <Text
          color={theme.colors.white}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.xs}
        >
          {intl.formatMessage(messages.formButton)}
        </Text>
      </Button>
    </FormStyle>
  )
}

export default injectIntl(Form)
