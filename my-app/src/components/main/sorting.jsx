import React  from 'react';

const Sorting = () => {
    return(
        <div className='main__sorting sorting'>
            <span className='sorting__title'>Сортировать:</span>
            <button className='sorting__button-money'>по цене</button>
            <button className='sorting__button-popularity'>по популярности</button>
            <button className='sorting__button-up'></button>
            <button className='sorting__button-down'></button>
        </div>
    )
}

export default Sorting