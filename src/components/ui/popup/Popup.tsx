import { StyledOverlay, StyledPopup } from './styled'
import CloseButton from '../close-button/CloseButton'
import { useAppSelector } from '../../../redux/reduxHooks'
import DayMenu from '../day-menu/DayMenu'

function Popup (): JSX.Element {
  const isPopupOpen = useAppSelector(state => state.app.popup.isOpen)
  const popup = useAppSelector(state => state.app.popup)

  return (
    <StyledOverlay isShow={isPopupOpen} tabIndex={(isPopupOpen) ? 0 : -1}>
      <StyledPopup>
        {(popup.data != null)
          ? <DayMenu/>
          : null}
        <CloseButton />
      </StyledPopup>
    </StyledOverlay>
  )
}
export default Popup
