import React from "react";
import { setPopUpSuccess } from "../../store/action";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'

const PopUpSuccess = (props) => {
    const {closePopUpSuccess} = props

    const onClosePopUpAddHandler = () => {
        document.onclick = (event) => {
            if ( event.target.className === 'closePopup' ) {
                closePopUpSuccess(false)
                document.body.classList.remove('openPopUp')
            };
        };
    }

    const handleClosePopupClick = () => {
        closePopUpSuccess(false)
        document.body.classList.remove('openPopUp')
    }

    return(
        <FocusTrap>
            <div className='closePopup'>
                <div className='popup-success'>
                    <h3 className='popup-success__title'>Товар успешно добавлен в корзину</h3>
                    <div className='popup-success__container'>
                        <Link className='popup-success__link' to='/basket'onClick={handleClosePopupClick}>
                            <span className='popup-success__text-link'>Перейти в корзину</span>   
                        </Link>
                        <button className='popup-success__button' onClick={handleClosePopupClick}>Продолжить покупки</button>
                    </div>
                    <button className='popup-success__close' onClick={handleClosePopupClick}></button>
                    {onClosePopUpAddHandler()}
                </div>
            </div>
        </FocusTrap>
    )
}

PopUpSuccess.propTypes = {
    closePopUpSuccess: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    closePopUpSuccess(bool) {
        dispatch(setPopUpSuccess(bool))
    }
})

export default connect(null, mapDispatchToProps)(PopUpSuccess);
