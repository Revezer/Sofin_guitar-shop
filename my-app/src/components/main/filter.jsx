import React, { useEffect }  from 'react';
import {connect} from 'react-redux'
import { setFilter, setOffersFilter } from '../../store/action';

let filterOffersPrice = []
let filterOffersType = []

const Filter = (props) => {
    const {offers, filter, setFilter, setFilterOffers} = props

    useEffect(() => {
        const setFilterPrice = () => {
            filterOffersPrice = offers.filter(offer => offer.price > filter.minPrice && offer.price < filter.maxPrice)
        }
    
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
            } else {
                return(filterOffersType = filterOffersPrice)
            }
        }
    
        const setFilterStrings = () => {
            let filterOffersString = []
            let temporaryOffers = 0
            if(filter.four) {
                temporaryOffers = filterOffersType.filter(offer => offer.strings === 4)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if (filter.six) {
                temporaryOffers = filterOffersType.filter(offer => offer.strings === 6)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if (filter.seven) {
                temporaryOffers = filterOffersType.filter(offer => offer.strings === 7)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if (filter.twelve) {
                temporaryOffers = filterOffersType.filter(offer => offer.strings === 12)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if(filter.four === false && filter.six === false && filter.seven === false && filter.twelve === false) {
                filterOffersString = filterOffersType
            }
            setFilterOffers(filterOffersString)
        }

        const setBigFilter = () => {
            setFilterPrice()
            setFilterType()
            setFilterStrings()
        }

        setBigFilter()
    },[filter, offers, setFilterOffers])

    const onChangeMinPrice = (event) => {
        setFilter({
            ...filter,
            minPrice: event.target.value
        })
    }

    const onChangeMaxPrice = (event) => {
        setFilter({
            ...filter,
            maxPrice: event.target.value
        })
    }

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

    const getClassTypeAcoustics = filter.acoustics ? 'filter__type-text filter__type-text--active' : 'filter__type-text'
    const getClassTypeElectro = filter.electro ? 'filter__type-text filter__type-text--active' : 'filter__type-text'
    const getClassTypeUkulele = filter.ukulele ? 'filter__type-text filter__type-text--active' : 'filter__type-text'

    const getClassTypeFour = filter.four ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'
    const getClassTypeSix = filter.six ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'
    const getClassTypeSeven = filter.seven ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'
    const getClassTypeTwelve = filter.twelve ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'

    return(
        <form className='maint__filter filter'>
            <h2 className='filter__title'>Фильтр</h2>
            <div className='filter__money-conteiner'>
                <h3 className='filter__money-subtitle'>Цена, ₽</h3>
                <div className='filter__input-conteiner'>
                    <input className='filter__money-input' onChange={onChangeMinPrice}/>
                    <input className='filter__money-input' onChange={onChangeMaxPrice}/>
                </div>
            </div>
            <div className='filter__type-conteiner'>
                <h3 className='filter__type-subtitle'>Тип гитар</h3>
                <div className='filter__inputs-type'>
                    <label>
                        <input className='filter__input-type' onClick={onChangeAcoustics} type='checkbox'/>
                        <span className={getClassTypeAcoustics}>Акустические гитары</span>
                    </label>
                    <label>
                        <input className='filter__input-type' onClick={onChangeElectro} type='checkbox'/>
                        <span className={getClassTypeElectro}>Электрогитары</span>
                    </label>
                    <label>
                        <input className='filter__input-type' onClick={onChangeUkulele} type='checkbox'/>
                        <span className={getClassTypeUkulele}>Укулеле</span>
                    </label>
                </div>
            </div>
            <div>
                <h3 className='filter__amount-subtitle'>Количество струн</h3>
                <div className='filter__inputs-amount'>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeFour} type='checkbox'/>
                        <span className={getClassTypeFour}>4</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeSix} type='checkbox'/>
                        <span className={getClassTypeSix}>6</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeSeven} type='checkbox'/>
                        <span className={getClassTypeSeven}>7</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' onClick={onChangeTwelve} type='checkbox'/>
                        <span className={getClassTypeTwelve}>12</span>
                    </label>
                </div>
            </div>
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
    },
    setFilterOffers (offers) {
        dispatch(setOffersFilter(offers))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
