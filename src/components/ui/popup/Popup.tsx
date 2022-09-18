import { StyledOverlay, StyledPopup } from './styled'
// import { useSelector } from 'react-redux'
// import DayMenu from '../day-menu/DayMenu'
import CloseButton from '../close-button/CloseButton'

function Popup (): JSX.Element {
  // const popupObject = useSelector((state) => state?.appReducer.popup)

  // popupObject.isOpen true false

  return (
    <StyledOverlay isShow={true}>
      <StyledPopup>
        {/* {popupObject.data ? <DayMenu data={popupObject.data} cellActivityCallBack={popupObject.callBack} cellExtraCallBack={popupObject.callBackTwo} /> : null} */}
        <CloseButton />
      </StyledPopup>
    </StyledOverlay>
  )
}
export default Popup
