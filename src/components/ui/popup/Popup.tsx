import { StyledOverlay, StyledPopup } from './styled'
import CloseButton from '../close-button/CloseButton'
import { useAppSelector } from '../../../redux/reduxHooks'
import DayMenu from '../day-menu/DayMenu'

function Popup (): JSX.Element {
  const isPopupOpen = useAppSelector(state => state.app.popup.isOpen)
  const popup = useAppSelector(state => state.app.popup)

  return (
    <StyledOverlay isShow={isPopupOpen}>
      <StyledPopup>
        {(popup.data != null)
          ? <DayMenu cellActivityCallback={function (value: 1 | 2 | 3 | 4 | null): void {
            throw new Error('Function not implemented.')
          } } cellExtraCallback={function (value: number): void {
            throw new Error('Function not implemented.')
          } } />
          : null}
        <CloseButton />
      </StyledPopup>
    </StyledOverlay>
  )
}
export default Popup
