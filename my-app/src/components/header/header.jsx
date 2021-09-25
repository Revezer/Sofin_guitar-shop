import React from 'react';
import Logo from '../../img/logo.svg'
import IconMap from '../../img/icon_map.svg'
import IconSearch from '../../img/icon_search.svg'
import IconBasket from '../../img/icon_basket.svg'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {addedOffers} = props

    const counterOffers = () => {
        if(addedOffers.length > 0) {
            return(
                <span className='list-icon__text'>{addedOffers.length}</span>
            )
        } else {
            return(
                <span className='list-icon__text'></span>
            )
        }
    }

    return(
        <header className='header'>
            <img className='header__logo' src={Logo} alt='логотип магазина'></img>
            <ul className='header__list-link list-link'>
                <li>
                    <Link className='list-link__item' to='/'>Каталог</Link>
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
                    <Link to='/basket'>
                        <img src={IconBasket} alt='иконка корзины'></img>
                        {counterOffers()}
                    </Link>
                </li>
            </ul>
        </header>
    )
}

const mapStateToProps = (state) => ({
    addedOffers: state.addedOffers
})

export default connect(mapStateToProps, null)(Header)
