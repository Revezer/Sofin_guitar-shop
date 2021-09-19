import React from "react";
import Electro from '../../img/electro-mini.png'

const Selected = () => {
    return(
        <div className='basket__selected selected'>
            <button className='selected__delete'></button>
            <img className='selected__img' src={Electro} alt='фото гитары'></img>
            <div className='selected__info-conteiner'>
                <h3 className='selected__name'>ЭлектроГитара Честер bass</h3>
                <div className='selected__text-container'>
                <span className='selected__info'>Артикул: SO757575</span>
                <span className='selected__info'>Электрогитара, 6 струнная </span>
                </div>
            </div>
            <span className='selected__price'>17 500 ₽</span>
            <div className='selected__buttons'>
                <button className='selected__button'>-</button>
                <span className='selected__number'>0</span>
                <button className='selected__button'>+</button>
            </div>
            <span className='selected__total'>17 500 ₽</span>
        </div>
    )
}

export default Selected
