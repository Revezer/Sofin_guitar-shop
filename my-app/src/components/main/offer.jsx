import React from 'react';
import Stars from '../../img/stars.svg'
import Electro from '../../img/electro.jpg'
import Acousticks from '../../img/acoustics.jpg'
import Ukulele from '../../img/ukulele.jpg'
import Basket from '../../img/basket.svg'

const Offer = (props) => {
    const {offer} = props

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

    return(
        <div className='catalog__offer offer'>
            <img className='offer__img' src={setGuitagImg(offer.type)} alt='фото гитары'/>
            <div className='offer__stars'>
                <img src={Stars} alt='звезды'/>
                <span className='offer__number'>{offer.popularity}</span>
            </div>
            <div className='offer__text-conteiner'>
                <span className='offer__name'>{offer.name}</span>
                <span className='offer__price'>{offer.price} ₽</span>
            </div>
            <div className='offer__button-conteiner'>
                <button className='offer__info'>Подробнее</button>
                <button className='offer__buy'>
                    <img className='offer__buy-icon' src={Basket} alt='иконка корзины'/>Купить
                    </button>
            </div>
        </div>
    )
}

export default Offer
