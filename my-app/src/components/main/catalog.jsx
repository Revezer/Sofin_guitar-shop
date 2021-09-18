import React from 'react'
import FilterComponent from './filter'
import SortingComponent from './sorting'

const Catalog = () => {
    return(
        <main className='main'>
            <h1 className='main__title'>Каталог гитар</h1>
            <span className='main__text main__text--arrow'>Главная</span>
            <span className='main__text'>Каталог</span>
            <div className='main__conteiner'>
                <FilterComponent/>
                <SortingComponent/>
                <div className='main__catalog'>

                </div>
            </div>
        </main>
    )
}

export default Catalog
