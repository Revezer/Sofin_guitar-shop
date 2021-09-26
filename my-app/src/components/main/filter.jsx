import React, { useEffect, useState }  from 'react';
import {connect} from 'react-redux'
import { setFilter, setOffersFilter, setPage } from '../../store/action';

let filterOffersPrice = []
let filterOffersType = []

const Filter = (props) => {
    const {offers, filter, setFilter, setFilterOffers, setPage} = props

    const [typeFour, setTypeFour] = useState(true)
    const [typeSix, setTypeSix] = useState(true)
    const [typeSeven, setTypeSeven] = useState(true)
    const [typeTwelve, setTypeTwelve] = useState(true)

    useEffect(() => {
        setPage(1)

        const setFilterPrice = () => {
            filterOffersPrice = offers.filter(offer => offer.price >= filter.minPrice && offer.price <= filter.maxPrice)
        }
    
        const setFilterType = () => {
            if(filter.acoustics && filter.electro && filter.ukulele) {
                setTypeFour(true)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(true)
                return(filterOffersType = filterOffersPrice)
            } else if (filter.acoustics && filter.electro) {
                setTypeFour(true)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(true)
                return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'акустическая гитара' || offer.type === 'электрогитара'))
            } else if (filter.acoustics && filter.ukulele) {
                setTypeFour(true)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(true)
                return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'акустическая гитара' || offer.type === 'укулеле'))
            } else if (filter.electro && filter.ukulele) {
                setTypeFour(true)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(false)
                return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'электрогитара' || offer.type === 'укулеле'))
            } else if (filter.acoustics) {
                setTypeFour(false)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(true)
                return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'акустическая гитара'))
            } else if (filter.electro) {
                setTypeFour(true)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(false)
                return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'электрогитара'))
            } else if (filter.ukulele) {
                setTypeFour(true)
                setTypeSix(false)
                setTypeSeven(false)
                setTypeTwelve(false)
                return(filterOffersType = filterOffersPrice.filter(offer => offer.type === 'укулеле'))
            } else {
                setTypeFour(true)
                setTypeSix(true)
                setTypeSeven(true)
                setTypeTwelve(true)
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
    },[filter, offers, setFilterOffers, setPage])

    const onChangeMinPrice = (event) => {
        let number = Number(event.target.value.replace(/\s/g, ''))
        if(number > filter.maxPrice) {
            setFilter({
                ...filter,
                minPrice: number,
                maxPrice: number
            })
        } else {
            setFilter({
                ...filter,
                minPrice: number
            })
        }
    }

    const onChangeMaxPrice = (event) => {
        let number = Number(event.target.value.replace(/\s/g, ''))
        if(number < filter.minPrice) {
            setFilter({
                ...filter,
                maxPrice: number,
                minPrice: number
            })
        } else {
            setFilter({
                ...filter,
                maxPrice: number
            })
        }
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

    const getInputFour = () => {
        if(typeFour) {
            return(
                <label>
                    <input className='filter__input-amount' onClick={onChangeFour} type='checkbox'/>
                    <span className={getClassTypeFour}>4</span>
                </label>
            )
        } else {
            return(
                <label>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>4</span>
                </label>
            )
        }
    }

    const getInputSix = () => {
        if(typeSix) {
            return(
                <label>
                    <input className='filter__input-amount' onClick={onChangeSix} type='checkbox'/>
                    <span className={getClassTypeSix}>6</span>
                </label>
            )
        } else {
            return(
                <label>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>6</span>
                </label>
            )
        }
    }

    const getInputSeven = () => {
        if(typeSeven) {
            return(
                <label>
                    <input className='filter__input-amount' onClick={onChangeSeven} type='checkbox'/>
                    <span className={getClassTypeSeven}>7</span>
                </label>
            )
        } else {
            return(
                <label>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>7</span>
                </label>
            )
        }
    }

    const getInputTwelve = () => {
        if(typeTwelve) {
            return(
                <label>
                    <input className='filter__input-amount' onClick={onChangeTwelve} type='checkbox'/>
                    <span className={getClassTypeTwelve}>12</span>
                </label>
            )
        } else {
            return(
                <label>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>12</span>
                </label>
            )
        }
    }

    const numberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    return(
        <form className='maint__filter filter'>
            <h2 className='filter__title'>Фильтр</h2>
            <div className='filter__money-conteiner'>
                <h3 className='filter__money-subtitle'>Цена, ₽</h3>
                <div className='filter__input-conteiner'>
                    <input className='filter__money-input filter__money-input--line' value={numberWithSpaces(filter.minPrice)} onChange={onChangeMinPrice}/>
                    <input className='filter__money-input' value={numberWithSpaces(filter.maxPrice)} onChange={onChangeMaxPrice}/>
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
                    {getInputFour()}
                    {getInputSix()}
                    {getInputSeven()}
                    {getInputTwelve()}
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
    },
    setPage(number) {
        dispatch(setPage(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
