import React from "react";
import Electro from '../../img/electro-mini.png'

const PopUpDelete = () => {
    return(
        <div className='main-popup'>
            <h3 className='main-popup__title'>Удалить этот товар? </h3>
            <div className='main-popup__container'>
                <img className='main-popup__img' src={Electro} alt='фото гитары'></img>
                <div className='main-popup__info-conteiner'>
                    <h3 className='main-popup__name'>ЭлектроГитара Честер bass</h3>
                    <span className='main-popup__info'>Артикул: SO757575</span>
                    <span className='main-popup__info'>Электрогитара, 6 струнная </span>
                    <h3 className='main-popup__price'>Цена: 17 500 ₽</h3>
                </div>
                <div className='main-popup__container-button'>
                    <button className='main-popup__button'>Удалить товар</button>
                    <button className='main-popup__button-proceed'>Продолжить покупки</button>
                </div>
            </div>
                <button className='main-popup__close'></button>
        </div>
    )
}

export default PopUpDelete;