import React from "react";
import { setPopUpSuccess } from "../../store/action";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

const PopUpSuccess = (props) => {
    const {closePopUpSuccess} = props

    const closePopUpAddHandler = () => {
        document.onclick = (event) => {
            if ( event.target.className === 'closePopup' ) {
                closePopUpSuccess(false)
                document.body.classList.remove('openPopUp')
            };
        };
    }

    const closePopup = () => {
        closePopUpSuccess(false)
        document.body.classList.remove('openPopUp')
    }

    return(
        <div className='popup-success'>
            <h3 className='popup-success__title'>Товар успешно добавлен в корзину</h3>
            <div className='popup-success__container'>
                <Link className='popup-success__link' to='/basket'onClick={closePopup}>Перейти в корзину</Link>
                <button className='popup-success__button' onClick={closePopup}>Продолжить покупки</button>
            </div>
            <button className='popup-success__close' onClick={closePopup}></button>
            {closePopUpAddHandler()}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    closePopUpSuccess(bool) {
        dispatch(setPopUpSuccess(bool))
    }
})

export default connect(null, mapDispatchToProps)(PopUpSuccess);
