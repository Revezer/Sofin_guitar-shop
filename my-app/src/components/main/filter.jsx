import React, { useEffect }  from 'react';
import {connect} from 'react-redux'
import {getFilterPrice, getFilterStrings, getFilterType, setFilter, setOffersFilter, setPage, setStringSix, setStringFour, setStringSeven, setStringTwelve } from '../../store/action';
import PropTypes from 'prop-types'

const MIN_PRISE = 1
const MAX_PRISE = 35000

const Filter = (props) => {
    const {offers, filter, setFilter, setPage, getFilterPrice, getFilterType, getFilterStrings, four, six, seven, twelve, fourActive, sixActive, sevenActive, twelveActive, setStringsFour, setStringsSix, setStringsSeven, setStringsTwelve} = props

    useEffect(() => {
        setPage(1)
        getFilterPrice()
        getFilterType()
        getFilterStrings()
    },[filter, offers, setPage, getFilterStrings, getFilterType, getFilterPrice, fourActive, sixActive, sevenActive, twelveActive])

    const onChangeMinPrice = (event) => {
        let number = event.target.value.replace(/[A-Za-zА-Яа-я -]/g, '')
        if(number < MIN_PRISE) {
            number = MIN_PRISE
        }
        if(number > MAX_PRISE) {
            number = MAX_PRISE
        }
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
        let number = event.target.value.replace(/[A-Za-zА-Яа-я -]/g, '')
        if(number < MIN_PRISE) {
            number = MIN_PRISE
        }
        if(number > MAX_PRISE) {
            number = MAX_PRISE
        }
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

    const handleChangeAcousticsClick = (event) => {
        setFilter({
            ...filter,
            acoustics: event.target.checked
        })
    }

    const handleChangeElectroClick = (event) => {
        setFilter({
            ...filter,
            electro: event.target.checked
        })
    }

    const handleChangeUkuleleClick = (event) => {
        setFilter({
            ...filter,
            ukulele: event.target.checked
        })
    }

    const handleChangeFourClick = (event) => {
        setStringsFour(event.target.checked)
    }

    const handleChangeSixClick = (event) => {
        setStringsSix(event.target.checked)
    }

    const handleChangeSevenClick = (event) => {
        setStringsSeven(event.target.checked)
    }

    const handleChangeTwelveClick = (event) => {
        setStringsTwelve(event.target.checked)
    }

    const getClassTypeAcoustics = filter.acoustics ? 'filter__type-text filter__type-text--active' : 'filter__type-text'
    const getClassTypeElectro = filter.electro ? 'filter__type-text filter__type-text--active' : 'filter__type-text'
    const getClassTypeUkulele = filter.ukulele ? 'filter__type-text filter__type-text--active' : 'filter__type-text'

    const getClassTypeFour = fourActive ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'
    const getClassTypeSix = sixActive ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'
    const getClassTypeSeven = sevenActive ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'
    const getClassTypeTwelve = twelveActive ? 'filter__amount-text filter__amount-text--active' : 'filter__amount-text'

    const getInputFour = () => {
        if(four) {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount' onClick={handleChangeFourClick} type='checkbox'/>
                    <span className={getClassTypeFour}>4</span>
                </label>
            )
        } else {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>4</span>
                </label>
            )
        }
    }

    const getInputSix = () => {
        if(six) {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount' onClick={handleChangeSixClick} type='checkbox'/>
                    <span className={getClassTypeSix}>6</span>
                </label>
            )
        } else {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>6</span>
                </label>
            )
        }
    }

    const getInputSeven = () => {
        if(seven) {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount' onClick={handleChangeSevenClick} type='checkbox'/>
                    <span className={getClassTypeSeven}>7</span>
                </label>
            )
        } else {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>7</span>
                </label>
            )
        }
    }

    const getInputTwelve = () => {
        if(twelve) {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount' onClick={handleChangeTwelveClick} type='checkbox'/>
                    <span className={getClassTypeTwelve}>12</span>
                </label>
            )
        } else {
            return(
                <label  className='filter__input-label'>
                    <input className='filter__input-amount'/>
                    <span className='filter__amount-text filter__amount-text--disabled'>12</span>
                </label>
            )
        }
    }

    const getNumberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    return(
        <form className='main__filter filter'>
            <h2 className='filter__title'>Фильтр</h2>
            <div className='filter__money-conteiner'>
                <h3 className='filter__money-subtitle'>Цена, ₽</h3>
                <div className='filter__input-conteiner'>
                    <label>
                        <input className='filter__money-input filter__money-input--line' minValue='0' maxValue='100000' value={getNumberWithSpaces(filter.minPrice)} onChange={onChangeMinPrice}/>
                    </label>
                    <label>
                        <input className='filter__money-input' minValue='0' maxValue='100000' value={getNumberWithSpaces(filter.maxPrice)} onChange={onChangeMaxPrice}/>
                    </label>
                </div>
            </div>
            <div className='filter__type-conteiner'>
                <h3 className='filter__type-subtitle'>Тип гитар</h3>
                <div className='filter__inputs-type'>
                    <label className='filter__input-label'>
                        <input className='filter__input-type' onClick={handleChangeAcousticsClick} type='checkbox'/>
                        <span className={getClassTypeAcoustics}>Акустические гитары</span>
                    </label>
                    <label  className='filter__input-label'>
                        <input className='filter__input-type' onClick={handleChangeElectroClick} type='checkbox'/>
                        <span className={getClassTypeElectro}>Электрогитары</span>
                    </label>
                    <label  className='filter__input-label'>
                        <input className='filter__input-type' onClick={handleChangeUkuleleClick} type='checkbox'/>
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

Filter.propTypes = {
    offers: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        strings: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })),
    filter: PropTypes.shape({
        minPrice: PropTypes.number.isRequired,
        maxPrice: PropTypes.number.isRequired,
        acoustics: PropTypes.bool.isRequired,
        electro: PropTypes.bool.isRequired,
        ukulele: PropTypes.bool.isRequired
    }).isRequired,
    strings: PropTypes.shape({
        four: PropTypes.bool.isRequired,
        six: PropTypes.bool.isRequired,
        seven: PropTypes.bool.isRequired,
        twelve: PropTypes.bool.isRequired,
    }).isRequired,
    four: PropTypes.bool.isRequired,
    six: PropTypes.bool.isRequired,
    seven: PropTypes.bool.isRequired,
    twelve: PropTypes.bool.isRequired,
    setFilter: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    getFilterPrice: PropTypes.func.isRequired,
    getFilterType: PropTypes.func.isRequired,
    getFilterStrings: PropTypes.func.isRequired,
    setStrings: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    offers: state.filters.offers,
    filter: state.filters.filter,
    four: state.filters.four,
    six: state.filters.six,
    seven: state.filters.seven,
    twelve: state.filters.twelve,
    fourActive: state.filters.fourActive,
    sixActive: state.filters.sixActive,
    sevenActive: state.filters.sevenActive,
    twelveActive: state.filters.twelveActive,
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
    },
    getFilterPrice() {
        dispatch(getFilterPrice())
    },
    getFilterType() {
        dispatch(getFilterType())
    },
    getFilterStrings() {
        dispatch(getFilterStrings())
    },
    setStringsFour(bool) {
        dispatch(setStringFour(bool))
    },
    setStringsSix(bool) {
        dispatch(setStringSix(bool))
    },
    setStringsSeven(bool) {
        dispatch(setStringSeven(bool))
    },
    setStringsTwelve(bool) {
        dispatch(setStringTwelve(bool))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
