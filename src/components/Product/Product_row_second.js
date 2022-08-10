import React, { useState } from 'react'
import { Product } from './Product';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const Product_row_second = () => {
    const [ProductRow2, setProductRow2] = useState({
        left: 0,
    })

    let Larr2 , Rarr2

    if (ProductRow2.left === 0) {
        Larr2 = {
            display:"none"
        }
    } else if (ProductRow2.left === -1000) {
        Rarr2 = {
            display:"none"
        }
    }

    return (
        <div className="Products_row">
            <h1>Mobiles & Accessories</h1>
            <div className="leftArr arrow" style={Larr2} onClick={() => {
                setProductRow2({ ...ProductRow2, left: ProductRow2.left + 1000 })
            }}>
                <ArrowLeftIcon className="Larr"/>
            </div>
            <div className="rightArr arrow" style={Rarr2} onClick={() => {
                setProductRow2({ ...ProductRow2, left: ProductRow2.left - 1000 })
            }}>
                <ArrowRightIcon className="Rarr" />
            </div>
            <div className="Products_box" style={ ProductRow2 }>
                <Product
                    id="11"
                    name="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage).."
                    img="https://m.media-amazon.com/images/I/41I4ZIBgc3S.jpg"
                    price={24999}
                    brand="by OnePlus"
                    subprice="26,999.00"
                    star={5}
                />
                
                <Product
                    id="12"
                    name="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)"
                    img="https://m.media-amazon.com/images/I/41e1JcORdNS.jpg"
                    price={24999}
                    brand="by OnePlus"
                    subprice="26,999.00"
                    star={5}
                />
                <Product
                    id="13"
                    name="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)| 5000 mAh| 2.3GHz Mediatek Helio G35..."
                    img="https://m.media-amazon.com/images/I/41sGASjc4-L.jpg"
                    price={8799}
                    brand="by Redmi"
                    subprice="10,999.00"
                    star="5"
                />
                <Product
                    id="14"
                    name="Redmi 9A (Sea Blue 2GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor..."
                    img="https://m.media-amazon.com/images/I/41jRzGyDUJL.jpg"
                    price={6799}
                    brand="by Redmi"
                    subprice="8,999.00"
                    star="5"
                />
                <Product
                    id="15"
                    name="Redmi Note 10 (Aqua Green, 4GB RAM, 64GB Storage)"
                    img="https://m.media-amazon.com/images/I/41DkB0yM5GS.jpg"
                    price={12499}
                    brand="by Redmi"
                    subprice="15,999.00"
                    star="5"
                />
                <Product
                    id="16"
                    name="Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage).."
                    img="https://m.media-amazon.com/images/I/710weRkP-nL._AC_UL320_.jpg"
                    price={22999}
                    brand="Samsung"
                    subprice="28,999.00"
                    star="5"
                />
                <Product
                    id="17"
                    name="New Apple I Phone 12 Pro"
                    img="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
                    price={80230}
                    brand="Apple"
                    subprice="84,999.00"
                    star="5"
                />
                <Product
                    id="18"
                    name="New Apple I Phone 12 Pro Max (128 GB) - Pacific Blue"
                    img="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
                    price={124700}
                    brand="Apple"
                    subprice="1,29,999.00"
                    star="5"
                />
                <Product
                    id="19"
                    name="New Apple iPhone 11 Pro Max (256GB) - Midnight Green"
                    img="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
                    price={94700}
                    brand="Apple"
                    subprice="1,23,999.00"
                    star="5"
                />
                <Product
                    id="20"
                    name="New Apple iPhone 12 Mini (64GB) - White"
                    img="https://m.media-amazon.com/images/I/71tT8J5cKuL._AC_UY218_.jpg"
                    price={61700}
                    brand="Apple"
                    subprice="1,23,999.00"
                    star="5"
                />
                <Product
                    id="21"
                    name="OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage)..."
                    img="https://m.media-amazon.com/images/I/8145DElqceL._AC_UY218_.jpg"
                    price={35999}
                    brand="Oppo"
                    subprice="37,999.00"
                    star="5"
                />
                <Product
                    id="22"
                    name="OPPO F19 Pro (Fluid Black, 8GB RAM, 256GB Storage)..."
                    img="https://m.media-amazon.com/images/I/712PBW8cGBL._AC_UY218_.jpg"
                    price={23400}
                    brand="Oppo"
                    subprice="25,999.00"
                    star="5"
                />
            </div>
        </div>
    )
}
