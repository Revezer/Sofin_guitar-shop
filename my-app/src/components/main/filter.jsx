import React  from 'react';

const Filter = () => {
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
                        <input className='filter__input-type' type='checkbox'/>
                        <span className='filter__type-text'>Акустические гитары</span>
                    </label>
                    <label>
                        <input className='filter__input-type' type='checkbox'/>
                        <span className='filter__type-text'>Электрогитары</span>
                    </label>
                    <label>
                        <input className='filter__input-type' type='checkbox'/>
                        <span className='filter__type-text'>Укулеле</span>
                    </label>
                </div>
            </div>
            <div>
                <h3 className='filter__amount-subtitle'>Количество струн</h3>
                <div className='filter__inputs-amount'>
                    <label>
                        <input className='filter__input-amount' type='checkbox'/>
                        <span className='filter__amount-text'>4</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' type='checkbox'/>
                        <span className='filter__amount-text'>6</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' type='checkbox'/>
                        <span className='filter__amount-text'>7</span>
                    </label>
                    <label>
                        <input className='filter__input-amount' type='checkbox'/>
                        <span className='filter__amount-text'>12</span>
                    </label>
                </div>
            </div>
            <button className='filter__button'>показать</button>
        </form>
    )
}

export default Filter