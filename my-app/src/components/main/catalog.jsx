import React from 'react'
import FilterComponent from './filter'
import OfferComponent from './offer'
import SortingComponent from './sorting'
import {connect} from 'react-redux'
import PopUpAdd from './popup-add'
import PopUpSuccess from './popup-success'
import { setPage } from '../../store/action'

const Catalog = (props) => {
    const {sortOffers, page, getPage} = props

    let pop = []

    const doo = () => {
        for (let i = 0; i < sortOffers.length; i += 9) {
            pop.push(sortOffers.slice(i, i + 9));
        }
    }

    doo()
    

    const getButtonBack = page === 1 ? '' : <button className='main__page-button--back' onClick={()=>getPage(page - 1)}>Назад</button>
    const getButtonNext = page === pop.length ? '' : <button className='main__page-button--next' onClick={()=>getPage(page + 1)}>Далее</button>
    const getFirstButton = page === 1 || page === 2 ? '' : <button className='main__page-button' onClick={()=>getPage(1)}>1</button>
    const getEndButton = page === pop.length || page === pop.length - 1 ? '' : <button className='main__page-button' onClick={()=>getPage(pop.length)}>{pop.length}</button>
    const getOtherButton = page < pop.length - 2 ? <button className='main__page-button'>...</button> : ''
    const getActiveButton = () => {
        if(page === 1) {
            return(
                <>
                <button className='main__page-button main__page-button--active'>1</button>
                <button className='main__page-button' onClick={()=>getPage(2)}>2</button>
                </>
            )
        } else if(page === pop.length) {
            return(
                <>
                <button className='main__page-button' onClick={()=>getPage(pop.length - 1)}>{pop.length - 1}</button>
                <button className='main__page-button main__page-button--active'>{pop.length}</button>
                </>
            )
        } else if(page > 1 && page < (pop.length)) {
            return(
                <>
                <button className='main__page-button' onClick={()=>getPage(page - 1)}>{page - 1}</button>
                <button className='main__page-button main__page-button--active'>{page}</button>
                <button className='main__page-button' onClick={()=>getPage(page + 1)}>{page + 1}</button>
                </>
            )
        }
    }

    const getOffers = () => {
        if (pop.length === 0) {
            return(<></>)
        } else {
            return(
                pop[page - 1].map((offer, index) => <OfferComponent key={offer + index} offer={pop[page - 1][index]} />)
            )
        }
    }
    
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
                    {
                        getOffers()
                    }
                </div>
            </div>
            <div className='main__page-container'>
                    {getButtonBack}
                    {getFirstButton}
                    {getActiveButton()}
                    {getOtherButton}
                    {getEndButton}
                    {getButtonNext}
            </div>
        </main>
        <PopUpAdd/>
        <PopUpSuccess/>
        </>
    )
}

const mapStateToProps = (state) => ({
    sortOffers: state.sortOffers,
    page: state.page
})

const mapDispatchToProps = (dispatch) => ({
    getPage(number) {
        dispatch(setPage(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
