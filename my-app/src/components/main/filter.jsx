import React  from 'react';
import {connect} from 'react-redux'
import { setFilter } from '../../store/action';

let filterOffersPrice = []
let filterOffersType = []

const Filter = (props) => {
    const {offers, filter, setFilter} = props

    const setFilterPrice = () => {
        filterOffersPrice = offers.filter(offer => offer.price > filter.minPrice && offer.price < filter.maxPrice)
    }

    setFilterPrice()

    console.log(filterOffersPrice)

    const setFilterType = () => {
        if(filter.acoustics && filter.electro && filter.ukulele) {
            return(filterOffersType = filterOffersPrice)
        } else if (filter.acoustics && filter.electro) {
            return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'акустическая гитара' || offer.type === 'электрогитара'))
        } else if (filter.acoustics && filter.ukulele) {
            return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'акустическая гитара' || offer.type === 'укулеле'))
        } else if (filter.electro && filter.ukulele) {
            return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'электрогитара' || offer.type === 'укулеле'))
        } else if (filter.acoustics) {
            return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'акустическая гитара'))
        } else if (filter.electro) {
            return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'электрогитара'))
        } else if (filter.ukulele) {
            return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'укулеле'))
        }
    }

    setFilterType()
    console.log(filterOffersType)

    const onChangeAcoustics = (event) => {
        setFilter({
            ...filter,
            acoustics: event.target.checked
        })
    }

    const onChangeElectro = (event) => {
        setFilter({
            ...filter,
            electro: event.target.checked
        })
    }

    const onChangeUkulele = (event) => {
        setFilter({
            ...filter,
            ukulele: event.target.checked
        })
    }

    const onChangeFour = (event) => {
        setFilter({
            ...filter,
            four: event.target.checked
        })
    }

    const onChangeSix = (event) => {
        setFilter({
            ...filter,
            six: event.target.checked
        })
    }

    const onChangeSeven = (event) => {
        setFilter({
            ...filter,
            seven: event.target.checked
        })
    }

    const onChangeTwelve = (event) => {
        setFilter({
            ...filter,
            twelve: event.target.checked
        })
    }

    return(
        <form className='maint__filter filter'>
            <h2 className='filter__title'>Фильтр</h2>
            <div className='filter__money-conteiner'>
                <h3 className='filter__money-subtitle'>Цена, ₽</h3>
                <div className='filter__input-conteiner'>
                    <input className='filter__money-input'/>
                    <input className='filter__money-input'/>
                </div>
            </div>
            <div className='filter__type-conteiner'>
                <h3 className='filter__type-subtitle'>Тип гитар</h3>
                <div className='filter__inputs-type'>
                    <label>
                        <input className='filter__input-type' onClick={onChangeAcoustics} type='checkbox'/>
                        <span className='filter__type-text'>Акустические гитары</span>
                    </label>
                    <label>
                        <input className='filter__input-type' onClick={onChangeElectro} type='checkbox'/>
                        <span className='filter__type-text'>Электрогитары</span>
                    </label>
                    <label>
                        <input className='filter__input-type' onClick={onChangeUkulele} type='checkbox'/>
                        <span className='filter__type-text'>Укулеле</span>
                    </label>
                </div>
            </div>
            <div>
                <h3 className='filter__amount-subtitle'>Количество струн</h3>
                <div className='filter__inputs-amount'>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeFour} type='checkbox'/>
                        <span className='filter__amount-text'>4</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeSix} type='checkbox'/>
                        <span className='filter__amount-text'>6</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeSeven} type='checkbox'/>
                        <span className='filter__amount-text'>7</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeTwelve} type='checkbox'/>
                        <span className='filter__amount-text'>12</span>
                    </label>
                </div>
            </div>
            <button className='filter__button'>показать</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    offers: state.offers,
    filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    setFilter(data) {
        dispatch(setFilter(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
