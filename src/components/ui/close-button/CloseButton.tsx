import React, { PropsWithChildren } from 'react'
import { StyledCloseButton } from './styled'
import { useAppDispatch } from './../../../redux/reduxHooks'
import { togglePopup } from '../../../redux/slices/app-slice'

function CloseButton ({ children }: PropsWithChildren): JSX.Element {
  const dispatch = useAppDispatch()

  return (
    <StyledCloseButton onClick={() => {
      dispatch(togglePopup({ isOpen: false }))
    }} className="сloseButton">
      {children}
    </StyledCloseButton>
  )
}

export default React.memo(CloseButton)
