import React from 'react'
import FilterComponent from './filter'
import OfferComponent from './offer'
import SortingComponent from './sorting'
import {connect} from 'react-redux'
import PopUpAdd from './popup-add'
import PopUpSuccess from './popup-success'

const Catalog = (props) => {
    const {offers} = props
    
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
                        offers.map((offer, index) => <OfferComponent key={offer + index} offer={offers[index]} />)
                    }
                </div>
            </div>
        </main>
        <PopUpAdd/>
        <PopUpSuccess/>
        </>
    )
}

const mapStateToProps = (state) => ({
    offers: state.offers
})

// const mapDispatchToProps = (dispatch) => ({
//     switchingMenu(selected) {
//         dispatch(selectedMenu(selected))
//     }
// })

export default connect(mapStateToProps, null)(Catalog);
