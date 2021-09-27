import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { getSorting, setDownSort, setPopylaritySort, setPriceSort, setUpSort } from '../../store/action';

const Sorting = (props) => {
    const {sortMoney, setSortPrice, sortPopularity, setSortPopularity, sortUp, setSortUp, sortDown, setSortDown, offers, getSorting} = props

    useEffect(() => {
        getSorting(offers)
    },[offers, getSorting, sortMoney, sortPopularity, sortUp, sortDown])

    const handleSwichSortPriceClick = () => {
        if(sortMoney === false) {
            setSortPopularity(false)
            if(sortUp === false && sortDown === false) {
                setSortUp(true)
            }
        }
        setSortPrice(!sortMoney)
    }

    const handleSwichPopularityClick = () => {
        if(sortPopularity === false) {
            setSortPrice(false)
            if(sortUp === false && sortDown === false) {
                setSortUp(true)
            }
        }
        setSortPopularity(!sortPopularity)
    }

    const handleSwichUpClick = () => {
        if(sortUp === false) {
            setSortDown(false)
            if(sortMoney === false && sortPopularity === false) {
                setSortPrice(true)
            }
        }
        setSortUp(!sortUp)
    }

    const handleSwichDownClick = () => {
        if(sortDown === false) {
            setSortUp(false)
            if(sortMoney === false && sortPopularity === false) {
                setSortPrice(true)
            }
        }
        setSortDown(!sortDown)
    }

    const setMoneyClass = sortMoney ? 'sorting__button-money' : 'sorting__button-money sorting__button-money--noactive'
    const setPopylarityClass = sortPopularity ? 'sorting__button-popularity' : 'sorting__button-popularity sorting__button-popularity--noactive'
    const setUpClass = sortUp ? 'sorting__button-up' : 'sorting__button-up sorting__button-up--noactive'
    const setDownClass = sortDown ? 'sorting__button-down' : 'sorting__button-down sorting__button-down--noactive'

    return(
        <div className='main__sorting sorting'>
            <span className='sorting__title'>Сортировать:</span>
            <button className={setMoneyClass} onClick={handleSwichSortPriceClick}>по цене</button>
            <button className={setPopylarityClass} onClick={handleSwichPopularityClick}>по популярности</button>
            <button className={setUpClass} onClick={handleSwichUpClick}></button>
            <button className={setDownClass} onClick={handleSwichDownClick}></button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    sortMoney: state.sorting.sortMoney,
    sortPopularity: state.sorting.sortPopularity,
    sortUp: state.sorting.sortUp,
    sortDown: state.sorting.sortDown,
    offers: state.filters.filterOffers
})

const mapDispatchToProps = (dispatch) => ({
    setSortPrice(bool) {
        dispatch(setPriceSort(bool))
    },
    setSortPopularity(bool) {
        dispatch(setPopylaritySort(bool))
    },
    setSortUp(bool) {
        dispatch(setUpSort(bool))
    },
    setSortDown(bool) {
        dispatch(setDownSort(bool))
    },
    getSorting(offers) {
        dispatch(getSorting(offers))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
