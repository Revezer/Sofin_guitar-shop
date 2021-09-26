import React from 'react';
import Logo from '../../img/logo-footer.svg'
import Facebook from '../../img/facebook.svg'
import Instagram from '../../img/instagram.svg'
import Twitter from '../../img/twitter.svg'

const Footer = () => {
    return(
        <footer className='footer'>
            <img className='footer__logo' src={Logo} alt='логотип'></img>
            <ul className='footer__social social'>
                <li>
                    <a href='/'>
                        <img src={Facebook} alt='иконка facebook'/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src={Instagram} alt='иконка instagram'/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src={Twitter} alt='иконка twitter'/>
                    </a>
                </li>
            </ul>
            <ul className='footer__list'>
                <li className='footer__list-conteiner-benefits'>
                    <span className='footer__list-headline'>О нас</span>
                    <ul className='footer__list-benefits footer__list-list'>
                        <li className='footer__list-item'>Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</li>
                        <li className='footer__list-item footer__list-item--margin'>Все инструменты проверены, отстроены и доведены до идеала!</li>
                    </ul>
                </li>
                <li className='footer__list-conteiner-range'>
                    <span className='footer__list-headline'>Каталог</span>
                    <ul className='footer__list-range footer__list-list'>
                        <li className='footer__list-item footer__list-item--letter'>Акустические гитары</li>
                        <li className='footer__list-item footer__list-item--letter'>Классические гитары</li>
                        <li className='footer__list-item footer__list-item--letter'>Электрогитары</li>
                        <li className='footer__list-item footer__list-item--letter'>Бас-гитары</li>
                        <li className='footer__list-item footer__list-item--letter'>Укулеле</li>
                    </ul>
                </li>
                <li className='footer__list-conteiner-info'>
                    <span className='footer__list-headline'>Информация</span>
                    <ul className='footer__list-info footer__list-list'>
                        <li className='footer__list-item footer__list-item--letter'>Где купить?</li>
                        <li className='footer__list-item footer__list-item--letter'>Блог</li>
                        <li className='footer__list-item footer__list-item--letter'>Вопрос - ответ</li>
                        <li className='footer__list-item footer__list-item--letter'>Возврат</li>
                        <li className='footer__list-item footer__list-item--letter'>Сервис-центры</li>
                    </ul>
                </li>
            </ul>
            <ul className='footer__address'>
                <span className='footer__address-headline'>Контакты</span>
                <li className='footer__address-item footer__address-item--height'>
                    <span>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</span>
                    <span className='footer__address-telephon'>8-812-500-50-50</span>
                </li>
                <li className='footer__address-item footer__address-item--height footer__address-item--margin'>
                    <span>Режим работы:</span>
                    <span className='footer__address-time'>с 11:00 до 20:00,</span>
                    <span>без выходных.</span>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
