import React, { useEffect }  from 'react';
import {connect} from 'react-redux'
import { setDownSort, setOffersSort, setPopylaritySort, setPriceSort, setUpSort } from '../../store/action';

const Sorting = (props) => {
    const {sortMoney, setSortPrice, sortPopularity, setSortPopularity, sortUp, setSortUp, sortDown, setSortDown, offers, setSortOffers} = props

    function sortPopularityLowToHigh(offerA, offerB) {
        return (offerA.popularity - offerB.popularity);
    }

    function sortPopularityHighToLow(offerA, offerB) {
        return (offerB.popularity - offerA.popularity);
    }
      
    function sortPriceLowToHigh(offerA, offerB) {
        return (offerB.price - offerA.price);
    }
      
    function sortPriceHighToLow(offerA, offerB) {
        return (offerA.price - offerB.price);
    }

    const getOffersSort = () => {
        switch(true) {
            case sortMoney:
                switch(true) {
                    case sortUp:
                        return offers.slice().sort(sortPriceHighToLow);
                    case sortDown:
                        return offers.slice().sort(sortPriceLowToHigh);
                    default:
                        return offers.slice().sort(sortPriceHighToLow);
                }
            case sortPopularity:
                switch(true) {
                    case sortUp:
                        return offers.slice().sort(sortPopularityLowToHigh);
                    case sortDown:
                        return offers.slice().sort(sortPopularityHighToLow);
                    default:
                        return offers.slice().sort(sortPopularityLowToHigh);
                }
            default:
                return(offers.slice())
        }
    }

    useEffect(() => {
        setSortOffers(getOffersSort())
    }, [sortMoney, sortPopularity, sortUp, sortDown])

    const setSwichSortPrice = () => {
        if(sortMoney === false) {
            setSortPopularity(false)
            if(sortUp === false && sortDown === false) {
                setSortUp(true)
            }
        }
        setSortPrice(!sortMoney)
    }

    const setSwichPopularity = () => {
        if(sortPopularity === false) {
            setSortPrice(false)
            if(sortUp === false && sortDown === false) {
                setSortUp(true)
            }
        }
        setSortPopularity(!sortPopularity)
    }

    const setSwichUp = () => {
        if(sortUp === false) {
            setSortDown(false)
            if(sortMoney === false && sortPopularity === false) {
                setSortPrice(true)
            }
        }
        setSortUp(!sortUp)
    }

    const setSwichDown = () => {
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
            <button className={setMoneyClass} onClick={setSwichSortPrice}>по цене</button>
            <button className={setPopylarityClass} onClick={setSwichPopularity}>по популярности</button>
            <button className={setUpClass} onClick={setSwichUp}></button>
            <button className={setDownClass} onClick={setSwichDown}></button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    sortMoney: state.sortMoney,
    sortPopularity: state.sortPopularity,
    sortUp: state.sortUp,
    sortDown: state.sortDown,
    offers: state.offers
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
    setSortOffers(offers) {
        dispatch(setOffersSort(offers))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
