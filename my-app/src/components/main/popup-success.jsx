import React from "react";

const PopUpSuccess = () => {
    return(
        <div className='popup-success'>
            <h3 className='popup-success__title'>Товар успешно добавлен в корзину</h3>
            <div className='popup-success__container'>
                <a className='popup-success__link' href='/'>Перейти в корзину</a>
                <button className='popup-success__button'>Продолжить покупки</button>
            </div>
            <button className='popup-success__close'></button>
        </div>
    )
}

export default PopUpSuccess
