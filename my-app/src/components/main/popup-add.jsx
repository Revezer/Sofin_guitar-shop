import React from "react";
import Electro from '../../img/electro-mini.png'
import Acoustic from '../../img/acoustics-mini.png'
import Ukulele from '../../img/ukulele-mini.png'
import {connect} from 'react-redux'
import { setOffers, setPopUpAdd, setPopUpSuccess } from '../../store/action'

const PopUpAdd = (props) => {
    const {closePopUpAdd, openPopUpSuccess, offer, addOffers, addedOffers} = props

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

    const closePopUpAddHandler = () => {
        document.onclick = (event) => {
            if ( event.target.className === 'closePopup' ) {
                closePopUpAdd(false)
            };
        };
    }

    const handleClosePopupClick = () => {
        closePopUpAdd(false)
        document.body.classList.remove('openPopUp')
    }

    const handlePopUpSuccessOpenClick = () => {
        const offers = addedOffers.slice()
        offers.push(offer)
        addOffers(offers)
        closePopUpAdd(false)
        openPopUpSuccess(true)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                openPopUpSuccess(false)
                document.body.classList.remove('openPopUp')
            }
        }
        document.body.classList.add('openPopUp')
    }

    const getNumberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className='main-popup'>
            <h3 className='main-popup__title'>Добавить товар в корзину</h3>
            <div className='main-popup__container'>
                <img className='main-popup__img' src={getGuitagImg()} alt='фото гитары'></img>
                <div className='main-popup__info-conteiner'>
                    <h3 className='main-popup__name'>{offer.name}</h3>
                    <span className='main-popup__info'>Артикул: {offer.code}</span>
                    <span className='main-popup__info'>{offer.type}, {offer.strings} струнная </span>
                    <h3 className='main-popup__price'>Цена: {getNumberWithSpaces(offer.price)} ₽</h3>
                </div>
                <button className='main-popup__button' onClick={handlePopUpSuccessOpenClick}>Добавить в корзину</button>
            </div>
            <button className='main-popup__close' onClick={handleClosePopupClick}></button>
            {closePopUpAddHandler()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    offer: state.popups.addOffer,
    addedOffers: state.filters.addedOffers
})

const mapDispatchToProps = (dispatch) => ({
    closePopUpAdd(bool) {
        dispatch(setPopUpAdd(bool))
    },
    openPopUpSuccess(bool) {
        dispatch(setPopUpSuccess(bool))
    },
    addOffers(offers) {
        dispatch(setOffers(offers))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUpAdd);
