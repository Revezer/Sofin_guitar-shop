import React from 'react'
import FilterComponent from './filter'
import OfferComponent from './offer'
import SortingComponent from './sorting'
import {connect} from 'react-redux'
import PopUpAdd from './popup-add'
import PopUpSuccess from './popup-success'
import { setPage } from '../../store/action'
import PropTypes from 'prop-types'

const MAXIMUM_OFFERS = 9

const NUMBER = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3
}

const Catalog = (props) => {
    const {sortOffers, page, setPageNumber: handlePageNumberClick, popupAdd, popupSuccess} = props

    let offers = []

    sortOffers.slice().forEach((item)=>{
    if(!offers.length || offers[offers.length-1].length === MAXIMUM_OFFERS)
        offers.push([]);
        offers[offers.length-1].push(item);
    });
    
    const getButtonBack = page === NUMBER.ONE ? '' : <button className='main__page-button--back' onClick={()=>handlePageNumberClick(page - NUMBER.ONE)}>Назад</button>
    const getButtonNext = page === offers.length ? '' : <button className='main__page-button--next' onClick={()=>handlePageNumberClick(page + NUMBER.ONE)}>Далее</button>
    const getFirstButton = page === NUMBER.ONE || page === NUMBER.TWO ? '' : <button className='main__page-button' onClick={()=>handlePageNumberClick(NUMBER.ONE)}>1</button>
    const getEndButton = page === offers.length || page === offers.length - NUMBER.ONE ? '' : <button className='main__page-button' onClick={()=>handlePageNumberClick(offers.length)}>{offers.length}</button>
    const getOtherButton = page < offers.length - 2 ? <button className='main__page-button'>...</button> : ''
    const getOtherB2utton = page > NUMBER.THREE ? <button className='main__page-button'>...</button> : ''
    const getActiveButton = () => {
        if(page === NUMBER.ONE) {
            if(offers.length === NUMBER.ONE) {
                return (
                    <></>
                )
            } else {
                return(
                    <>
                    <button className='main__page-button main__page-button--active'>1</button>
                    <button className='main__page-button' onClick={()=>handlePageNumberClick(NUMBER.TWO)}>2</button>
                    </>
                )
            }
        } else if(page === offers.length) {
            return(
                <>
                <button className='main__page-button' onClick={()=>handlePageNumberClick(offers.length - NUMBER.ONE)}>{offers.length - NUMBER.ONE}</button>
                <button className='main__page-button main__page-button--active'>{offers.length}</button>
                </>
            )
        } else if(page > NUMBER.ONE && page < (offers.length)) {
            return(
                <>
                <button className='main__page-button' onClick={()=>handlePageNumberClick(page - NUMBER.ONE)}>{page - NUMBER.ONE}</button>
                <button className='main__page-button main__page-button--active'>{page}</button>
                <button className='main__page-button' onClick={()=>handlePageNumberClick(page + NUMBER.ONE)}>{page + NUMBER.ONE}</button>
                </>
            )
        }
    }

    const getOffers = () => {
        if (offers.length === NUMBER.ZERO) {
            return(<></>)
        } else {
            return(
                offers[page - NUMBER.ONE].map((offer, index) => <OfferComponent key={offer + index} offer={offers[page - NUMBER.ONE][index]} />)
            )
        }
    }

    const getPopupAdd = popupAdd ? <PopUpAdd/> : ''

    const getPopupSuccess = popupSuccess ? <PopUpSuccess/> : ''
    
    return(
        <>
        <main className='main'>
            <h1 className='main__title'>Каталог гитар</h1>
            <span className='main__text main__text--arrow'>Главная</span>
            <span className='main__text'>Каталог</span>
            <div className='main__conteiner'>
                <FilterComponent/>
                <SortingComponent/>
                <div className='main__catalog catalog'>
                    {getOffers()}
                </div>
            </div>
            <div className='main__page-container'>
                    {getButtonBack}
                    {getFirstButton}
                    {getOtherB2utton}
                    {getActiveButton()}
                    {getOtherButton}
                    {getEndButton}
                    {getButtonNext}
            </div>
        </main>
        {getPopupAdd}
        {getPopupSuccess}
        </>
    )
}

Catalog.propTypes = {
    sortOffers: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })),
    page: PropTypes.number.isRequired,
    popupAdd: PropTypes.bool.isRequired,
    popupSuccess: PropTypes.bool.isRequired,
    setPageNumber: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    sortOffers: state.sorting.sortOffers,
    page: state.sorting.page,
    popupAdd: state.popups.popupAdd,
    popupSuccess: state.popups.popupSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    setPageNumber(number) {
        dispatch(setPage(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
