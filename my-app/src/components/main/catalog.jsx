import React from 'react'
import FilterComponent from './filter'
import OfferComponent from './offer'
import SortingComponent from './sorting'
import {connect} from 'react-redux'
import PopUpAdd from './popup-add'
import PopUpSuccess from './popup-success'
import { setPage } from '../../store/action'

const ZERO = 0
const MAXIMUM_OFFERS = 9
const ONE = 1
const TWO = 2
const THREE = 3

const Catalog = (props) => {
    const {sortOffers, page, setPageNumber, popupAdd, popupSuccess} = props

    let offers = []

    const getDivisionOffers = () => {
        for (let i = ZERO; i < sortOffers.length; i += MAXIMUM_OFFERS) {
            offers.push(sortOffers.slice(i, i + MAXIMUM_OFFERS));
        }
    }

    getDivisionOffers()
    
    const getButtonBack = page === ONE ? '' : <button className='main__page-button--back' onClick={()=>setPageNumber(page - ONE)}>Назад</button>
    const getButtonNext = page === offers.length ? '' : <button className='main__page-button--next' onClick={()=>setPageNumber(page + ONE)}>Далее</button>
    const getFirstButton = page === ONE || page === TWO ? '' : <button className='main__page-button' onClick={()=>setPageNumber(ONE)}>1</button>
    const getEndButton = page === offers.length || page === offers.length - ONE ? '' : <button className='main__page-button' onClick={()=>setPageNumber(offers.length)}>{offers.length}</button>
    const getOtherButton = page < offers.length - 2 ? <button className='main__page-button'>...</button> : ''
    const getOtherB2utton = page > THREE ? <button className='main__page-button'>...</button> : ''
    const getActiveButton = () => {
        if(page === ONE) {
            if(offers.length === ONE) {
                return (
                    <></>
                )
            } else {
                return(
                    <>
                    <button className='main__page-button main__page-button--active'>1</button>
                    <button className='main__page-button' onClick={()=>setPageNumber(TWO)}>2</button>
                    </>
                )
            }
        } else if(page === offers.length) {
            return(
                <>
                <button className='main__page-button' onClick={()=>setPageNumber(offers.length - ONE)}>{offers.length - ONE}</button>
                <button className='main__page-button main__page-button--active'>{offers.length}</button>
                </>
            )
        } else if(page > ONE && page < (offers.length)) {
            return(
                <>
                <button className='main__page-button' onClick={()=>setPageNumber(page - ONE)}>{page - ONE}</button>
                <button className='main__page-button main__page-button--active'>{page}</button>
                <button className='main__page-button' onClick={()=>setPageNumber(page + ONE)}>{page + ONE}</button>
                </>
            )
        }
    }

    const getOffers = () => {
        if (offers.length === ZERO) {
            return(<></>)
        } else {
            return(
                offers[page - ONE].map((offer, index) => <OfferComponent key={offer + index} offer={offers[page - ONE][index]} />)
            )
        }
    }

    const getPopupAdd = popupAdd ? <PopUpAdd/> : ''

    const getPopupSuccess = popupSuccess ? <PopUpSuccess/> : ''

    const getPopup = popupAdd || popupSuccess ? <div className='closePopup'></div> : ''
    
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
        {getPopup}
        {getPopupAdd}
        {getPopupSuccess}
        </>
    )
}

const mapStateToProps = (state) => ({
    sortOffers: state.sortOffers,
    page: state.page,
    popupAdd: state.popupAdd,
    popupSuccess: state.popupSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    setPageNumber(number) {
        dispatch(setPage(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
