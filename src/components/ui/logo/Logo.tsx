import logo from '../../../assets/logo.png'
import bigLogo from '../../../assets/mylogolow.jpg'
import { StyledLogo } from './styled'
import { memo } from 'react'

interface LogoProps {
  size?: number
  text?: string
}

function Logo ({ size, text }: LogoProps): JSX.Element {
  return (
    <StyledLogo href={(size != null) ? 'https://github.com/Navfront' : '/'}>
      <img
        loading='lazy'
        width={(size != null) ? '200' : '40'}
        height={(size != null) ? '100' : '40'}
        src={(size != null) ? bigLogo as string : logo as string}
        alt="Navfront.ru logo"
      />
      {(size != null) ? null : <span>{text}</span>}
    </StyledLogo>
  )
}

export default memo(Logo)
