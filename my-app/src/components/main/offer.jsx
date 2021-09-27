import React from 'react';
import Stars from '../../img/stars.svg'
import Electro from '../../img/electro.jpg'
import Acousticks from '../../img/acoustics.jpg'
import Ukulele from '../../img/ukulele.jpg'
import Basket from '../../img/basket.svg'
import {connect} from 'react-redux'
import { setOffer, setPopUpAdd } from '../../store/action';
import PropTypes from 'prop-types'

const Offer = (props) => {
    const {offer, setPopUpAdd, setOffer} = props

    const getGuitagImg = (guitar) => {
        switch (guitar) {
            case 'aкустические гитары':
                return(Acousticks);
            case 'электрогитара':
                return(Electro);
            case 'укулеле':
                return(Ukulele);
            default:
                return(Acousticks)
        }
    }

    const handlePopupAddOpenClick = () => {
        setPopUpAdd(true)
        setOffer(offer)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                onPopupAddClose()
            }
        }
        document.body.classList.add('openPopUp')
    }

    const onPopupAddClose = () => {
        setPopUpAdd(false)
        document.body.classList.remove('openPopUp')
    }

    const getNumberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className='catalog__offer offer'>
            <img className='offer__img' src={getGuitagImg(offer.type)} alt='фото гитары'/>
            <div className='offer__stars'>
                <img src={Stars} alt='звезды'/>
                <span className='offer__number'>{offer.popularity}</span>
            </div>
            <div className='offer__text-conteiner'>
                <span className='offer__name'>{offer.name}</span>
                <span className='offer__price'>{getNumberWithSpaces(offer.price)} ₽</span>
            </div>
            <div className='offer__button-conteiner'>
                <button className='offer__info'>Подробнее</button>
                <button className='offer__buy' onClick={handlePopupAddOpenClick}>
                    <img className='offer__buy-icon' src={Basket} alt='иконка корзины'/>Купить
                    </button>
            </div>
        </div>
    )
}

Offer.propTypes = {
    offer: PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired,
    setPopUpAdd: PropTypes.func.isRequired,
    setOffer: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    setPopUpAdd(bool) {
        dispatch(setPopUpAdd(bool))
    },
    setOffer(offer) {
        dispatch(setOffer(offer))
    }
})

export default connect(null, mapDispatchToProps)(Offer);
