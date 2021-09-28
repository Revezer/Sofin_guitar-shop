import React from "react";
import Electro from '../../img/electro-mini.png'
import Acoustic from '../../img/acoustics-mini.png'
import Ukulele from '../../img/ukulele-mini.png'
import {connect} from 'react-redux'
import { setOffers, setPopUpDelete } from "../../store/action";
import { PropTypes } from "prop-types";

const PopUpDelete = (props) => {
    const {offer, offers, setNewOffers, closePopUp} = props

    const handleClosePopupClick = () => {
        closePopUp(false)
        document.body.classList.remove('openPopUp')
    }

    const getGuitagImg = () => {
        switch (offer.type) {
            case 'aкустические гитары':
                return(Acoustic);
            case 'электрогитара':
                return(Electro);
            case 'укулеле':
                return(Ukulele);
            default:
                return(Acoustic)
        }
    }
    const handleDeleteOfferClick = () => {
        const array = offers.slice()
        setNewOffers(array.filter(element => element.id !== offer.id))
        handleClosePopupClick()
    }

    const getNumberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className='main-popup'>
            <h3 className='main-popup__title'>Удалить этот товар? </h3>
            <div className='main-popup__container'>
                <img className='main-popup__img' src={getGuitagImg()} alt='фото гитары'></img>
                <div className='main-popup__info-conteiner'>
                    <h3 className='main-popup__name'>ГИТАРА {offer.name}</h3>
                    <span className='main-popup__info'>Артикул: {offer.code}</span>
                    <span className='main-popup__info main-popup__info--margin'>{offer.type}, {offer.strings} струнная </span>
                    <h3 className='main-popup__price'>Цена: {getNumberWithSpaces(offer.price)} ₽</h3>
                </div>
                <div className='main-popup__container-button'>
                    <button className='main-popup__button' onClick={handleDeleteOfferClick} >Удалить товар</button>
                    <button className='main-popup__button-proceed' onClick={handleClosePopupClick}>Продолжить покупки</button>
                </div>
            </div>
                <button className='main-popup__close' onClick={handleClosePopupClick}></button>
        </div>
    )
}

PopUpDelete.propTypes = {
    offer: PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,
    setNewOffers: PropTypes.func.isRequired,
    closePopUp: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    offer: state.popups.offerDelete,
    offers: state.filters.addedOffers,

})

const mapDispatchToProps = (dispatch) => ({
    setNewOffers(offers) {
        dispatch(setOffers(offers))
    },
    closePopUp(bool) {
        dispatch(setPopUpDelete(bool))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUpDelete);