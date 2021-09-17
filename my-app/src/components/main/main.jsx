import React from 'react';
import FooterComponent from '../footer/footer';
import HeaderComponent from '../header/header';

const Main = () => {
    return(
        <>
            <HeaderComponent/>
            <main className='foo'></main>
            <FooterComponent/>
        </>
    )
}

export default Main
