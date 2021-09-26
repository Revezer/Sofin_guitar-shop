import React, { useEffect, useState } from 'react';
import FooterComponent from '../footer/footer';
import HeaderComponent from '../header/header';
import PopUpDelete from './popup-delete';
import SelectedComponent from './selected';
import {connect} from 'react-redux'
import {setTotalPrise} from '../../store/action';

const Basket = (props) => {
    const {offers, totalPrice, setPrice, popup} = props

    useEffect(()=> {
        let price = 0
        if(offers.length === 0) {
            setPrice(0)
        }
        offers.forEach(offer => {
            price = price + offer.price
            setPrice(price)
        })
    },[offers, setPrice])

    const getOffers = () => {
        if (offers.length === 0) {
            return(<></>)
        } else {
            return(
                offers.map((offer, index) => <SelectedComponent key={offer + index} offer={offers[index]} index={index} />)
            )
        }
    }

    const openPopUp = popup ? <PopUpDelete/> : ''

    const getPopup = popup ? <div className='closePopup'></div> : ''

    const [promoCode, setPromoCode] = useState('')
    const [error, setError] = useState(false)

    const setdiscount = () => {
        switch(promoCode) {
            case 'GITARAHIT':
                let discountA = totalPrice * 0.1
                return (totalPrice - discountA)
            case 'SUPERGITARA':
                return (totalPrice - 700)
            case 'GITARA2020':
                let discountB = totalPrice * 0.3
                if(discountB < 3000) {
                    return(totalPrice - discountB)
                } else if(discountB >= 3000) {
                    return(totalPrice - 3000)
                }
                break
            default:
                return(totalPrice)
        }
    }

    const getPromoCode = () => {
        let input = document.querySelector('.basket__discount-input')
        if (input.value !== 'GITARAHIT' && input.value !== 'SUPERGITARA' && input.value !== 'GITARA2020') {
            setError(true)
        } else {
            setError(false)
            setPromoCode(input.value)
        }
    }

    const textError = error ? 'basket__discount-error basket__discount-error--active' : 'basket__discount-error'

    const numberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <>
            <HeaderComponent/>
            <div className='basket'>
                <h1 className='basket__title'>Корзина</h1>
                <div className='basket__container'>
                    <span className='basket__text basket__text--arrow'>Главная</span>
                    <span className='basket__text basket__text--arrow'>Каталог</span>
                    <span className='basket__text'>Оформляем</span>
                </div>
                <div className='basket__selecteds'>
                    {getOffers()}
                </div>
                <div className='basket__completion-container'>
                    <div>
                        <h3 className='basket__text-discount'>Промокод на скидку</h3>
                        <span className='basket__discount-info'>Введите свой промокод, если он у вас есть.</span>
                        <div className='basket__discount-container'>
                            <span className={textError}>Промокод не действителен</span>
                            <input className='basket__discount-input'></input>
                            <button className='basket__discount-button' onClick={getPromoCode}>Применить купон</button>
                        </div>
                    </div>
                    <div className='basket__registration'>
                        <span className='basket__registration-text'>Всего: {numberWithSpaces(setdiscount())} ₽ </span>
                        <button className='basket__registration-button'>Оформить заказ</button>
                    </div>
                </div>
            </div>
            {getPopup}
            {openPopUp}
            <FooterComponent/>
        </>
    )
}

const mapStateToProps = (state) => ({
    offers: state.addedOffers,
    totalPrice: state.totalPrice,
    popup: state.popupDelete,
})

const mapDispatchToProps = (dispatch) => ({
    setPrice(price) {
        dispatch(setTotalPrise(price))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
