

import { Card } from '../Card/Card'
import { Filtr } from '../Filtr/Filtr'
import { Header } from '../Header/Header'
import s from './Catalog.module.css'


export function Catalog() {
    return (
        <>
            <div className="container">
                <h2>Каталог товаров</h2>
                <Filtr></Filtr>
                <div className={s.cards}>
                    <Card image='https://avatars.mds.yandex.net/i?id=e99a18a0a0899dee577c9e58bd75ddd9feacf631-12391223-images-thumbs&n=13' title='Перчатки провалотыва флотвылфтыва лфотыатфа' price='750'/>
                    <Card image='https://footballroom.ru/upload/iblock/3c9/3c949df7689287517ef9434367b55799.jpg' title='ВРАТАРСКИЕ ПЕРЧАТКИ ADIDAS X GL PRO GK3505' price='1550'></Card>
                    <Card image='https://avatars.mds.yandex.net/i?id=43333330d7fb46b6992549a0f7a0f0245cb32a8f-3737438-images-thumbs&n=13' title='Футболка, размер 50, цвет белый, хлопок 90% полиэстер' price='1005'></Card>
                    <Card image='https://avatars.mds.yandex.net/i?id=8e07c5e3d45e4040b51548fb0f27c48a_l-10289644-images-thumbs&n=13' title='Брюки женские широкие на резинке штаны прямые ' price='2500'></Card>
                </div>
            </div>
        </>
    )
}