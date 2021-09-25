import React, { useEffect } from 'react';
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

    return(
        <>
            <HeaderComponent/>
            <div className='basket'>
                <h1 className='basket__title'>Корзина</h1>
                <div className='basket__container'>
                    <span className='basket__text'>Главная</span>
                    <span className='basket__text'>Каталог</span>
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
                            <input className='basket__discount-input'></input>
                            <button className='basket__discount-button'>Применить купон</button>
                        </div>
                    </div>
                    <div className='basket__registration'>
                        <span className='basket__registration-text'>Всего: {totalPrice} ₽ </span>
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
