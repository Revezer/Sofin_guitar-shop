import React from 'react';
import Stars from '../../img/stars.svg'
import Electro from '../../img/electro.jpg'
import Acousticks from '../../img/acoustics.jpg'
import Ukulele from '../../img/ukulele.jpg'
import Basket from '../../img/basket.svg'
import {connect} from 'react-redux'
import { setOffer, setPopUpAdd } from '../../store/action';

const Offer = (props) => {
    const {offer, setPopUpAdd, setOffer} = props

    const setGuitagImg = (guitar) => {
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

    const onPopupAddOpen = () => {
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

    const numberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className='catalog__offer offer'>
            <img className='offer__img' src={setGuitagImg(offer.type)} alt='фото гитары'/>
            <div className='offer__stars'>
                <img src={Stars} alt='звезды'/>
                <span className='offer__number'>{offer.popularity}</span>
            </div>
            <div className='offer__text-conteiner'>
                <span className='offer__name'>{offer.name}</span>
                <span className='offer__price'>{numberWithSpaces(offer.price)} ₽</span>
            </div>
            <div className='offer__button-conteiner'>
                <button className='offer__info'>Подробнее</button>
                <button className='offer__buy' onClick={onPopupAddOpen}>
                    <img className='offer__buy-icon' src={Basket} alt='иконка корзины'/>Купить
                    </button>
            </div>
        </div>
    )
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
