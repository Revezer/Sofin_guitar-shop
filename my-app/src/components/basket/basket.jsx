import React from 'react';
import FooterComponent from '../footer/footer';
import HeaderComponent from '../header/header';
import SelectedComponent from './selected';

const Basket = () => {
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
                    <SelectedComponent/>
                    <SelectedComponent/>
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
                        <span className='basket__registration-text'>Всего: 47 000 ₽ </span>
                        <button className='basket__registration-button'>Оформить заказ</button>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </>
    )
}

export default Basket
