import React from "react";
import Electro from '../../img/electro-mini.png'
import Acoustic from '../../img/acoustics-mini.png'
import Ukulele from '../../img/ukulele-mini.png'
import { connect } from "react-redux";
import { setOfferDelete, setOffers, setPopUpDelete, setTotalPrise } from "../../store/action";
import PropTypes from 'prop-types'

const Selected = (props) => {
    const {offer, openPopUp, deleteOffer, addOffers, addedOffers} = props

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

    const handlePlusButtonClick = () => {
        let offers = addedOffers.slice()
        const foo = addedOffers.slice().filter(element => element.id = offer.id)
        const doo = addedOffers.slice().filter(element => element.id !== offer.id)
        offers = doo
        foo[0].amount ++
        offers.push(foo[0])
        addOffers(offers)
    }

    const handleInputChange = (event) => {
        let number = event.target.value.replace(/[A-Za-z -]/g, '')
        if(number < 1) {
            number = 1
        }
        if(number > 99) {
            number = 99
        }
        let offers = addedOffers.slice()
        const foo = addedOffers.slice().filter(element => element.id = offer.id)
        const doo = addedOffers.slice().filter(element => element.id !== offer.id)
        offers = doo
        foo[0].amount = number
        offers.push(foo[0])
        addOffers(offers)
    }

    const handleMinusButtonClick = () => {
        if(offer.amount === 1) {
            handleOpenDeletePopUpClick()
        }
        if(offer.amount > 1) {
            let offers = addedOffers.slice()
            const foo = addedOffers.slice().filter(element => element.id = offer.id)
            const doo = addedOffers.slice().filter(element => element.id !== offer.id)
            offers = doo
            foo[0].amount --
            offers.push(foo[0])
            addOffers(offers)
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
                <input className='selected__number' value={offer.amount} onChange={handleInputChange}></input>
                <button className='selected__button' onClick={handlePlusButtonClick}>+</button>
            </div>
            <span className='selected__total'>{getNumberWithSpaces(offer.price * offer.amount)} ₽</span>
        </div>
    )
}

Selected.propTypes = {
    offer: PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired,
    setPrice: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    openPopUp: PropTypes.func.isRequired,
    deleteOffer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    totalPrice: state.filters.totalPrice,
    addedOffers: state.filters.addedOffers
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
    },
    addOffers(offers) {
        dispatch(setOffers(offers))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Selected);
