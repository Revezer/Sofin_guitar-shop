import React from "react";
import Electro from '../../img/electro-mini.png'
import Acoustic from '../../img/acoustics-mini.png'
import Ukulele from '../../img/ukulele-mini.png'
import {connect} from 'react-redux'
import { setOffers, setPopUpDelete } from "../../store/action";

const PopUpDelete = (props) => {
    const {offer, offers, setNewOffers, closePopUp} = props

    const onClickClosePopup = () => {
        closePopUp(false)
        document.body.classList.remove('openPopUp')
    }

    const setGuitagImg = () => {
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
    const deleteOffer = () => {
        const array = offers.slice()
        setNewOffers(array.filter(element => element.id !== offer.id))
        onClickClosePopup()
    }

    const numberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className='main-popup'>
            <h3 className='main-popup__title'>Удалить этот товар? </h3>
            <div className='main-popup__container'>
                <img className='main-popup__img' src={setGuitagImg()} alt='фото гитары'></img>
                <div className='main-popup__info-conteiner'>
                    <h3 className='main-popup__name'>{offer.name}</h3>
                    <span className='main-popup__info'>Артикул: {offer.code}</span>
                    <span className='main-popup__info'>{offer.type}, {offer.strings} струнная </span>
                    <h3 className='main-popup__price'>Цена: {numberWithSpaces(offer.price)} ₽</h3>
                </div>
                <div className='main-popup__container-button'>
                    <button className='main-popup__button' onClick={deleteOffer} >Удалить товар</button>
                    <button className='main-popup__button-proceed' onClick={onClickClosePopup}>Продолжить покупки</button>
                </div>
            </div>
                <button className='main-popup__close' onClick={onClickClosePopup}></button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    offer: state.offerDelete,
    offers: state.addedOffers,

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