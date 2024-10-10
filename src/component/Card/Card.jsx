import { Link } from 'react-router-dom'
import s from './Card.module.css'

export function Card({image='src/assets/Card.png',title='ajnsdl;ajdladlcna;ldnclandcl;ansdcl;adlsc',price='550'}) {
    return (
        <>
            <div className={s.card}>
                <div className={s.imgBox}>
                    <img src={image} alt="" />
                </div>
                <h4>{title}</h4>
                <div className={s.price_btn}>
                    <p className={s.price}>{price} ₽</p>
                    <Link to='/' className={s.btn}>Добавить в корзину</Link>
                </div>
            </div>
        </>
    )
}