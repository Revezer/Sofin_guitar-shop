import React, { useEffect, useState } from 'react';
import FooterComponent from '../footer/footer';
import HeaderComponent from '../header/header';
import PopUpDelete from './popup-delete';
import SelectedComponent from './selected';
import {connect} from 'react-redux'
import {setTotalPrise} from '../../store/action';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DISCOUNT = {
    MIN: 0.1,
    MAX: 0.3,
    SUPER: 700,
    GITARA: 3000
}

const Basket = (props) => {
    const {offers, totalPrice, setPrice, popup} = props

    useEffect(()=> {
        let price = 0
        if(offers.length === 0) {
            setPrice(0)
        }
        offers.forEach(offer => {
            price = price + offer.price * offer.amount
            setPrice(price)
        })
    },[offers, setPrice])

    const getOffers = offers.length === 0 ? <></> : offers.map((offer, index) => <SelectedComponent key={offer + index} offer={offers[index]} index={index}/>)

    const openPopUp = popup ? <PopUpDelete/> : ''

    const [promoCode, setPromoCode] = useState('')
    const [error, setError] = useState(false)

    const setdiscount = () => {
        switch(promoCode) {
            case 'GITARAHIT':
                let discountA = totalPrice * DISCOUNT.MIN
                return (totalPrice - discountA)
            case 'SUPERGITARA':
                return (totalPrice - DISCOUNT.SUPER)
            case 'GITARA2020':
                let discountB = totalPrice * DISCOUNT.MAX
                if(discountB < DISCOUNT.GITARA) {
                    return(totalPrice - discountB)
                } else if(discountB >= DISCOUNT.GITARA) {
                    return(totalPrice - DISCOUNT.GITARA)
                }
                break
            default:
                return(totalPrice)
        }
    }

    const handlePromoCodeClick = () => {
        let input = document.querySelector('.basket__discount-input')
        if (input.value !== 'GITARAHIT' && input.value !== 'SUPERGITARA' && input.value !== 'GITARA2020') {
            setError(true)
        } else {
            setError(false)
            setPromoCode(input.value)
        }
    }

    const textError = error ? 'basket__discount-error basket__discount-error--active' : 'basket__discount-error'

    const getNumberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/[ ]/g, '')
    }

    return(
        <>
            <HeaderComponent/>
            <div className='basket'>
                <h1 className='basket__title'>Корзина</h1>
                <div className='basket__container'>
                    <span className='basket__text basket__text--arrow'>Главная</span>
                    <Link className='basket__text-link' to='/'>
                        <span className='basket__text basket__text--arrow'>Каталог</span>
                    </Link>
                    <span className='basket__text'>Оформляем</span>
                </div>
                <div className='basket__selecteds'>
                    {getOffers}
                </div>
                <div className='basket__completion-container'>
                    <div>
                        <h3 className='basket__text-discount'>Промокод на скидку</h3>
                        <span className='basket__discount-info'>Введите свой промокод, если он у вас есть.</span>
                        <div className='basket__discount-container'>
                            <span className={textError}>Промокод не действителен</span>
                            <label>
                                <input className='basket__discount-input' onChange={handleInputChange}></input>
                            </label>
                            <button className='basket__discount-button' onClick={handlePromoCodeClick}>Применить купон</button>
                        </div>
                    </div>
                    <div className='basket__registration'>
                        <span className='basket__registration-text'>Всего: {getNumberWithSpaces(setdiscount())} ₽ </span>
                        <Link to='#' className='basket__registration-button'>Оформить заказ</Link>
                    </div>
                </div>
            </div>
            {openPopUp}
            <FooterComponent/>
        </>
    )
}

Basket.propTypes = {
    offers: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })),
    totalPrice: PropTypes.number.isRequired,
    setPrice: PropTypes.func.isRequired,
    popup: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    offers: state.filters.addedOffers,
    totalPrice: state.filters.totalPrice,
    popup: state.popups.popupDelete,
})

const mapDispatchToProps = (dispatch) => ({
    setPrice(price) {
        dispatch(setTotalPrise(price))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
