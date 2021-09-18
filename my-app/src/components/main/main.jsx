import React from 'react';
import FooterComponent from '../footer/footer';
import HeaderComponent from '../header/header';
import CatalogComponent from './catalog';

const Main = () => {
    return(
        <>
            <HeaderComponent/>
            <CatalogComponent/>
            <FooterComponent/>
        </>
    )
}

export default Main
