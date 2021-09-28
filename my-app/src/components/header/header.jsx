import React from 'react';
import Logo from '../../img/logo.svg'
import IconMap from '../../img/icon_map.svg'
import IconSearch from '../../img/icon_search.svg'
import IconBasket from '../../img/icon_basket.svg'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ZERO = 0

const Header = (props) => {
    const {addedOffers} = props

    const getCounterOffers = () => {
        if(addedOffers.length > ZERO) {
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
            <a href='/'>
            <img className='header__logo' src={Logo} alt='логотип магазина'></img>
            </a>
            <ul className='header__list-link list-link'>
                <li className='list-link__catalog'>
                    <Link className='list-link__item' to='/'>Каталог</Link>
                </li>
                <li className='list-link__where'>
                    <a className='list-link__item' href='/'>Где купить?</a>
                </li>
                <li className='list-link__info'>
                    <a className='list-link__item' href='/'>О компании</a>
                </li>
                <li className='list-link__service'>
                    <a className='list-link__item' href='/'>Cервис-центры</a>
                </li>
            </ul>
            <ul className='header__list-icon list-icon'>
                <li>
                    <a className='list-icon__item' href='/'>
                        <img src={IconMap} alt='иконка карты'></img>
                    </a>
                </li>
                <li>
                    <a className='list-icon__item' href='/'>
                        <img src={IconSearch} alt='иконка поиска'></img>
                    </a>
                </li>
                <li>
                    <Link className='list-icon__item' to='/basket'>
                        <img src={IconBasket} alt='иконка корзины'></img>
                        {getCounterOffers()}
                    </Link>
                </li>
            </ul>
        </header>
    )
}

Header.propTypes = {
    addedOffers: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,
}

const mapStateToProps = (state) => ({
    addedOffers: state.filters.addedOffers
})

export default connect(mapStateToProps, null)(Header)
