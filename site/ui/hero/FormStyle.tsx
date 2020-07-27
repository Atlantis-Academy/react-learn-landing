import styled    from '@emotion/styled'

import { theme } from '../theme'

export const FormStyle = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&:focus': { outline: 'none' },
}))

export const InputForm = styled.input(() => ({
  width: '300px',
  height: '50px',
  background: theme.colors.dark,
  border: 'none',
  overflow: 'hidden',
  outline: 'none',
  color: theme.colors.white,
  fontFamily: theme.fontFamily.text,
  fontSize: theme.fontSize.xs,
}))

export const BorderInput = styled.div(() => ({
  border: `${theme.border.s}px solid ${theme.colors.whiteBlue}`,
  borderRadius: theme.borderRadius.s,
  padding: '2px',
  width: '310px',
  height: '55px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const InputText = styled.span(() => ({
  background: theme.colors.dark,
  overflow: 'hidden',
  borderColor: 'inherit',
  color: theme.colors.white,
  fontFamily: theme.fontFamily.text,
  fontSize: theme.fontSize.xs,
  width: 'fit-content',
}))

export const InputTextBox = styled.div(() => ({
  position: 'relative',
  top: '8px',
  left: '8px',
  width: '100%',
  marginLeft: '29px',
}))
