import React from 'react';
import Logo from '../../img/logo.svg'
import IconMap from '../../img/icon_map.svg'
import IconSearch from '../../img/icon_search.svg'
import IconBasket from '../../img/icon_basket.svg'

const Header = () => {
    return(
        <header className='header'>
            <img className='header__logo' src={Logo} alt='логотип магазина'></img>
            <ul className='header__list-link list-link'>
                <li>
                    <a className='list-link__item' href='/'>Каталог</a>
                </li>
                <li>
                    <a className='list-link__item' href='/'>Где купить?</a>
                </li>
                <li>
                    <a className='list-link__item' href='/'>О компании</a>
                </li>
                <li>
                    <a className='list-link__item' href='/'>Cервис-центры</a>
                </li>
            </ul>
            <ul className='header__list-icon list-icon'>
                <li>
                    <a href='/'>
                        <img src={IconMap} alt='иконка карты'></img>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src={IconSearch} alt='иконка поиска'></img>
                    </a>
                </li>
                <li>
                    <a href='basket'>
                        <img src={IconBasket} alt='иконка корзины'></img>
                        <span className='list-icon__text'>2</span>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
