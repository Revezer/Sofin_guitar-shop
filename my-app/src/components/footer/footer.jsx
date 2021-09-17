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
                <li className='footer-list__conteiner-benefits'>
                    <span className='footer-list__headline'>О нас</span>
                    <ul className='footer-list__benefits footer-list__list'>
                        <li className='footer-list__item'>Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</li>
                        <li className='footer-list__item footer-list__item--margin'>Все инструменты проверены, отстроены и доведены до идеала!</li>
                    </ul>
                </li>
                <li className='footer-list__conteiner-range'>
                    <span className='footer-list__headline'>Каталог</span>
                    <ul className='footer-list__range footer-list__list'>
                        <li className='footer-list__item footer-list__item--letter'>Акустические гитары</li>
                        <li className='footer-list__item footer-list__item--letter'>Классические гитары</li>
                        <li className='footer-list__item footer-list__item--letter'>Электрогитары</li>
                        <li className='footer-list__item footer-list__item--letter'>Бас-гитары</li>
                        <li className='footer-list__item footer-list__item--letter'>Укулеле</li>
                    </ul>
                </li>
                <li className='footer-list__conteiner-info'>
                    <span className='footer-list__headline'>Информация</span>
                    <ul className='footer-list__info footer-list__list'>
                        <li className='footer-list__item footer-list__item--letter'>Где купить?</li>
                        <li className='footer-list__item footer-list__item--letter'>Блог</li>
                        <li className='footer-list__item footer-list__item--letter'>Вопрос - ответ</li>
                        <li className='footer-list__item footer-list__item--letter'>Возврат</li>
                        <li className='footer-list__item footer-list__item--letter'>Сервис-центры</li>
                    </ul>
                </li>
            </ul>
            <ul className='footer__address'>
                <span className='footer-address__headline'>Контакты</span>
                <li className='footer-address__item footer-address__item--height'>
                    <span>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</span>
                    <span className='footer-address__telephon'>8-812-500-50-50</span>
                </li>
                <li className='footer-address__item footer-address__item--height footer-address__item--margin'>
                    <span>Режим работы:</span>
                    <span className='footer-address__time'>с 11:00 до 20:00,</span>
                    <span>без выходных.</span>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
