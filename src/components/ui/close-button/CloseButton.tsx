import { PropsWithChildren } from 'react'
import { StyledCloseButton } from './styled'

function CloseButton ({ children }: PropsWithChildren): JSX.Element {
  // const dispatchCloseClick = useDispatch()
  // const handlerOnClick = () => {
  //   dispatchCloseClick(togglePopup(null))
  // }

  return (
    <StyledCloseButton onClick={() => {
      console.log('click')
    }} className="сloseButton">
      {children}
    </StyledCloseButton>
  )
}

export default CloseButton
