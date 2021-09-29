import React from 'react';
import Logo from '../../img/logo-footer.svg'
import Facebook from '../../img/facebook.svg'
import Instagram from '../../img/instagram.svg'
import Twitter from '../../img/twitter.svg'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__container-logo'>
                <a href='#top'>
                    <img className='footer__logo' src={Logo} alt='логотип'></img>
                </a>
                <ul className='footer__social social'>
                    <li>
                        <a href='#top'>
                            <img src={Facebook} alt='иконка facebook'/>
                        </a>
                    </li>
                    <li className='footer__social-instagram'>
                        <a href='#top'>
                            <img src={Instagram} alt='иконка instagram'/>
                        </a>
                    </li>
                    <li className='footer__social-twitter'>
                        <a href='#top'>
                            <img src={Twitter} alt='иконка twitter'/>
                        </a>
                    </li>
                </ul>
            </div>
            <ul className='footer__list'>
                <li className='footer__list-conteiner-benefits'>
                    <li className='footer__list-headline'><span>О нас</span></li>
                    <ul className='footer__list-benefits footer__list-list'>
                        <li className='footer__list-item'>Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</li>
                        <li className='footer__list-item footer__list-item--margin'>Все инструменты проверены, отстроены и доведены до идеала!</li>
                    </ul>
                </li>
                <li className='footer__list-conteiner-range'>
                    <li className='footer__list-headline'><span>Каталог</span></li>
                    <ul className='footer__list-range footer__list-list'>
                        <li className='footer__list-item footer__list-item-margin footer__list-item--letter'><a className='footer__list-link' href='#top'>Акустические гитары</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Классические гитары</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Электрогитары</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Бас-гитары</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Укулеле</a></li>
                    </ul>
                </li>
                <li className='footer__list-conteiner-info'>
                    <li className='footer__list-headline'><span>Информация</span></li>
                    <ul className='footer__list-info footer__list-list'>
                        <li className='footer__list-item footer__list-item-margin footer__list-item--letter'><a className='footer__list-link' href='#top'>Где купить?</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Блог</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Вопрос - ответ</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Возврат</a></li>
                        <li className='footer__list-item footer__list-item--letter'><a className='footer__list-link' href='#top'>Сервис-центры</a></li>
                    </ul>
                </li>
            </ul>
            <ul className='footer__address'>
                <li className='footer__address-headline'><span>Контакты</span></li>
                <li className='footer__address-item footer__address-item--height'>
                    <span>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</span>
                    <a href='tel:88125005050' className='footer__address-telephon'>8-812-500-50-50</a>
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
