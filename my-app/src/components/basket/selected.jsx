import React, { useState } from "react";
import Electro from '../../img/electro-mini.png'
import Acoustic from '../../img/acoustics-mini.png'
import Ukulele from '../../img/ukulele-mini.png'
import { connect } from "react-redux";
import { setOfferDelete, setPopUpDelete, setTotalPrise } from "../../store/action";

const Selected = (props) => {
    const {offer, setPrice, totalPrice, openPopUp, deleteOffer} = props

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

    const [quantity, setQuantity] = useState(1)

    const handlePlusButtonClick = () => {
        setQuantity(quantity + 1)
        setPrice(totalPrice + offer.price * quantity)
    }

    const handleMinusButtonClick = () => {
        if(quantity === 1) {
            handleOpenDeletePopUpClick()
        }
        if(quantity > 1) {
            setQuantity(quantity - 1)
            setPrice(totalPrice - offer.price)
        }
    }

    const handleOpenDeletePopUpClick = () => {
        document.body.classList.add('openPopUp')
        deleteOffer(offer)
        openPopUp(true)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                openPopUp(false)
                document.body.classList.remove('openPopUp')
            }
        }
        document.onclick = (event) => {
            if ( event.target.className === 'closePopup' ) {
                openPopUp(false)
            };
        };
    }

    const getNumberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className='basket__selected selected'>
            <button className='selected__delete' onClick={handleOpenDeletePopUpClick}></button>
            <img className='selected__img' src={getGuitagImg()} alt='фото гитары'></img>
            <div className='selected__info-conteiner'>
                <h3 className='selected__name'>{offer.name}</h3>
                <div className='selected__text-container'>
                    <span className='selected__info'>Артикул: {offer.code}</span>
                    <span className='selected__info'>{offer.type}, {offer.strings} струнная </span>
                </div>
            </div>
            <span className='selected__price'>{getNumberWithSpaces(offer.price)} ₽</span>
            <div className='selected__buttons'>
                <button className='selected__button' onClick={handleMinusButtonClick}>-</button>
                <span className='selected__number'>{quantity}</span>
                <button className='selected__button' onClick={handlePlusButtonClick}>+</button>
            </div>
            <span className='selected__total'>{getNumberWithSpaces(offer.price * quantity)} ₽</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalPrice: state.filters.totalPrice
})

const mapDispatchToProps = (dispatch) => ({
    setPrice(price) {
        dispatch(setTotalPrise(price))
    },
    openPopUp(bool) {
        dispatch(setPopUpDelete(bool))
    },
    deleteOffer(offer) {
        dispatch(setOfferDelete(offer))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Selected);
