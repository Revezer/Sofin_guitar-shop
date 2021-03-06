import React from "react";
import Electro from '../../img/electro-mini.png'
import Acoustic from '../../img/acoustics-mini.png'
import Ukulele from '../../img/ukulele-mini.png'
import {connect} from 'react-redux'
import { setOffers, setPopUpAdd, setPopUpSuccess } from '../../store/action'
import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'

const PopUpAdd = (props) => {
    const {closePopUpAdd, openPopUpSuccess, offer, addOffers, addedOffers} = props

    let offers = addedOffers.slice()

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
                document.body.classList.remove('openPopUp')
            };
        };
    }

    const handleClosePopupClick = () => {
        closePopUpAdd(false)
        document.body.classList.remove('openPopUp')
    }

    const handlePopUpSuccessOpenClick = () => {
        const foo = offers.slice().filter(element => element.id === offer.id)
        const doo = offers.slice().filter(element => element.id !== offer.id)
        if(foo.length === 1) {
            foo[0].amount ++
            offers = doo
            offers.push(foo[0])
            addOffers(offers)
        }
        if(foo.length === 0) {
            offers.push(offer)
            addOffers(offers)
        }
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
        <FocusTrap>
            <div className='closePopup'>
                <div className='main-popup'>
                    <h3 className='main-popup__title'>Добавить товар в корзину</h3>
                    <div className='main-popup__container'>
                        <img className='main-popup__img' src={getGuitagImg()} alt='фото гитары'></img>
                        <div className='main-popup__info-conteiner'>
                            <h3 className='main-popup__name'>ГИТАРА {offer.name}</h3>
                            <span className='main-popup__info'>Артикул: {offer.code}</span>
                            <span className='main-popup__info main-popup__info--margin'>{offer.type}, {offer.strings} струнная </span>
                            <h3 className='main-popup__price'>Цена: {getNumberWithSpaces(offer.price)} ₽</h3>
                        </div>
                        <button className='main-popup__button' onClick={handlePopUpSuccessOpenClick}>Добавить в корзину</button>
                    </div>
                    <button className='main-popup__close' onClick={handleClosePopupClick}></button>
                    {closePopUpAddHandler()}
                </div>
            </div>
        </FocusTrap>
    )
}

PopUpAdd.propTypes = {
    offer: PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired,
    addedOffers: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })),
    closePopUpAdd: PropTypes.func.isRequired,
    openPopUpSuccess: PropTypes.func.isRequired,
    addOffers: PropTypes.func.isRequired,
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
