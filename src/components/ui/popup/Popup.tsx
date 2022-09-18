import { StyledOverlay, StyledPopup } from './styled'
// import { useSelector } from 'react-redux'
// import DayMenu from '../day-menu/DayMenu'
import CloseButton from '../close-button/CloseButton'
import { useAppSelector } from '../../../redux/reduxHooks'

function Popup (): JSX.Element {
  const isPopupOpen = useAppSelector(state => state.app.popup.isOpen)

  return (
    <StyledOverlay isShow={isPopupOpen}>
      <StyledPopup>
        {/* {popupObject.data ? <DayMenu data={popupObject.data} cellActivityCallBack={popupObject.callBack} cellExtraCallBack={popupObject.callBackTwo} /> : null} */}
        <CloseButton />
      </StyledPopup>
    </StyledOverlay>
  )
}
export default Popup
